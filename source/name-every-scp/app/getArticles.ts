import { ScpArticle } from "./types";

const fetchJson = async (url: string) => await (await fetch(url)).json();

const fetchDocument = async (url: string) => {
  const html = await (await fetch(url)).text();
  const doc = new DOMParser().parseFromString(html, "text/html");
  return doc;
};

const cheerioToCssSelector = (cheerio: string) =>
  cheerio
    .replace(/:first\b/g, ":first-child")
    .replace(/:last\b/g, ":last-child")
    .replace(/:eq\((\d+)\)/g, (_, num) => `:nth-child(${parseInt(num) + 1})`)
    .replace(/:gt\((\d+)\)/g, (_, num) => `:nth-child(n+${parseInt(num) + 2})`)
    .replace(
      /:lt\((\d+)\)/g,
      (_, num) => `:nth-child(-n+${parseInt(num) + 1})`,
    );

const seconds = (delaySecs: number): Promise<void> =>
  new Promise((resolve) => setTimeout(resolve, delaySecs * 1000));

// List of series pages and their selectors is an object with keys page URLs and value Cheerio selector that returns an element for each listed article
type SeriesPagesSelectors = {
  [url: string]: string;
};

export async function getArticles(
  seriesListUrl: string,
  seriesListUrlFilter: RegExp,
  articleTitleFilter: RegExp,
  corsProxyUrl: string,
  onPartialLoad: (message: string) => void,
): Promise<ScpArticle[]> {
  onPartialLoad("Getting list of SCP series...");
  let seriesPagesSelectors: SeriesPagesSelectors =
    await fetchJson(seriesListUrl);

  // Filter the series pages to just those relevant to this SCP branch
  seriesPagesSelectors = Object.fromEntries(
    Object.entries(seriesPagesSelectors).filter(([seriesPageUrl, selector]) =>
      seriesListUrlFilter.test(seriesPageUrl),
    ),
  );

  const articles = [];

  for (let [seriesIndex, [seriesPageUrl, seriesSelector]] of Object.entries(
    seriesPagesSelectors,
  ).entries()) {
    const seriesName = new URL(seriesPageUrl).pathname.replace(/^\//, "");
    onPartialLoad(
      `Getting SCPs from ${seriesPageUrl} (${seriesIndex + 1}/${Object.keys(seriesPagesSelectors).length})...`,
    );

    seriesSelector = cheerioToCssSelector(seriesSelector);

    await seconds(1);

    const seriesPageText = await (
      await fetch(corsProxyUrl + seriesPageUrl)
    ).text();
    const parser = new DOMParser();
    const seriesDocument = parser.parseFromString(seriesPageText, "text/html");
    const links = seriesDocument.querySelectorAll(seriesSelector);

    for (const link of links) {
      const linkElement = link.querySelector("a");
      if (!linkElement) continue;
      const title = linkElement.textContent ?? "";
      const altTitle = (link.textContent ?? "")
        .replace(title, "")
        .replace(/^\s*-\s*/, "");
      if (articleTitleFilter.test(altTitle)) continue;
      articles.push({
        title,
        altTitle,
        seriesName,
        slug: new URL(linkElement.href).pathname,
      });
    }
  }

  onPartialLoad(`${articles.length} SCPs loaded.`);

  return articles;
}

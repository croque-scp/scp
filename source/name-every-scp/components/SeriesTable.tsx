import ArticleRow from "./ArticleRow";
import { ScpArticle } from "@/app/types";
import SeriesGroup from "./SeriesGroup";

export default function SeriesTable({ articles }: { articles: ScpArticle[] }) {
  // Get unique series names from the article list
  const seriesNames = [...new Set(articles.map((a) => a.seriesName))];

  const seriesGroups = seriesNames.map((seriesName) => {
    const articlesInSeries = articles.filter(
      (article) => article.seriesName === seriesName,
    );

    const titlesInSeries = articlesInSeries
      .map((article) => article.altTitle)
      .sort((a, b) => a.localeCompare(b, "en", { sensitivity: "base" }));

    const articleRows = articlesInSeries.map((article) => (
      <ArticleRow
        key={article.slug}
        article={article}
        titlesInSeries={titlesInSeries}
      ></ArticleRow>
    ));

    return (
      <SeriesGroup key={seriesName} seriesName={seriesName}>
        {articleRows}
      </SeriesGroup>
    );
  });

  return (
    <table className="w-full">
      <thead>
        <tr>
          <th>SCP number</th>
          <th>Title</th>
          <th></th>
        </tr>
      </thead>
      {seriesGroups}
    </table>
  );
}

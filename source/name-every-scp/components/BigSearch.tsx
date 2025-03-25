import BigSearchMatch, { NoMatch, YesMatch } from "./BigSearchMatch";
import {
  ChangeEvent,
  FormEvent,
  Fragment,
  ReactNode,
  useEffect,
  useId,
  useState,
} from "react";
import { ScpArticle, SolveArticleHandler } from "@/app/types";

import uFuzzy from "@leeoniya/ufuzzy";

const SHOW_MAX_MATCHES = 5;
let counter = 0;

const fuzzy = new uFuzzy();

type SearchResult = {
  id: string;
  title: ReactNode;
  altTitle: ReactNode;
  article: ScpArticle;
};

export default function BigSearch({
  articles,
  onSolveArticle,
}: {
  articles: ScpArticle[];
  onSolveArticle: SolveArticleHandler;
}) {
  const inputId = useId();

  const [input, setInput] = useState("");
  const [fullMatchCount, setFullMatchCount] = useState(0);
  const [results, setResults] = useState<SearchResult[]>([]);

  function clearInput() {
    setInput("");
    setFullMatchCount(0);
    setResults([]);
  }

  function searchArticles(searchTerm: string) {
    const searchableArticles = articles.filter((a) => !a.solved);
    const titles = searchableArticles.map((a) => a.altTitleSearchable);

    let [indexes, info, orders] = fuzzy.search(
      titles,
      searchTerm,
      0,
      SHOW_MAX_MATCHES,
    );

    setFullMatchCount(indexes == null ? 0 : indexes.length);

    if (
      indexes != null &&
      info != null &&
      orders != null &&
      indexes.length <= SHOW_MAX_MATCHES
    ) {
      setResults(
        orders.map((order) => {
          const matchedArticle = searchableArticles[info.idx[order]];
          const title = matchedArticle.title;
          const isSoleMatch = indexes.length === 1;
          return {
            article: matchedArticle,
            id: matchedArticle.slug,
            title: isSoleMatch ? title : title.replace(/([0-9])/g, "?"),
            altTitle: uFuzzy.highlight<ReactNode, ReactNode>(
              titles[info.idx[order]],
              info.ranges[order],
              (part, matched) => {
                if (matched) return <YesMatch key={counter++}>{part}</YesMatch>;
                if (isSoleMatch) return part;
                return [
                  ...part.matchAll(/(?<p>[\s\p{P}]+)|(?<np>[^\s\p{P}]+)/gu),
                ].map((seg) => {
                  if (!seg.groups) return seg[0];
                  if (seg.groups.p) return seg[0];
                  if (seg.groups.np)
                    return (
                      <NoMatch key={counter++}>
                        {seg[0].replace(/[a-z]/g, "x").replace(/[^a-z]/g, "X")}
                      </NoMatch>
                    );
                });
              },
              "",
              (a, b) => (
                <Fragment key={counter++}>
                  {a}
                  {b}
                </Fragment>
              ),
            ),
          };
        }),
      );
    } else {
      setResults([]);
    }
  }

  function handleInputChange(event: ChangeEvent<HTMLInputElement>) {
    setInput(event.target.value);
    searchArticles(event.target.value);
  }

  useEffect(() => {
    searchArticles(input);
  }, [articles]);

  function handleFormSubmit(event: FormEvent) {
    event.preventDefault();
    if (results.length !== 1) return;
    onSolveArticle(results[0].article);
    clearInput();
  }

  const matchResults = results.map((match) => {
    return (
      <BigSearchMatch
        key={match.id}
        title={match.title}
        altTitle={match.altTitle}
      ></BigSearchMatch>
    );
  });

  return (
    <form
      onSubmit={handleFormSubmit}
      className="flex flex-col items-center py-[5rem]"
    >
      <label htmlFor={inputId} className="mb-1">
        Enter an SCP title:
      </label>
      <span className="mb-3 flex w-full gap-1">
        <input
          id={inputId}
          value={input}
          onChange={handleInputChange}
          className="flex-auto rounded border border-gray-300 bg-white p-1 px-1 text-sm text-gray-800 shadow hover:border-gray-400"
          autoComplete="off"
        ></input>
        <button
          type="button"
          onClick={clearInput}
          title="Clear input"
          className="flex-none rounded border border-gray-300 px-2 py-1 shadow hover:border-gray-400 active:shadow-none"
        >
          &times;
        </button>
      </span>

      <div className="mb-3 flex max-w-[550px] flex-col items-center rounded-xl border p-3">
        <span>
          {fullMatchCount}
          {results.length === 1 ? " match" : " matches"}
          {results.length ? ":" : ""}
        </span>
        <output className="flex flex-col gap-1">
          {results.length ? (
            matchResults
          ) : (
            <span className="italic text-gray-400">
              Matches will be shown here if there are 5 or fewer.
            </span>
          )}
        </output>
      </div>

      <button
        type="submit"
        className="rounded border border-gray-300 px-2 py-1 hover:border-gray-400 enabled:shadow disabled:border-gray-200 disabled:text-gray-400"
        disabled={results.length !== 1}
      >
        Add match to list
      </button>
    </form>
  );
}

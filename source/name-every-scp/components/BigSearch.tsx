import BigSearchMatch, { NoMatch, YesMatch } from "./BigSearchMatch";
import { ChangeEvent, ReactNode, useId, useState } from "react";

import { ScpArticle } from "../app/types";
import uFuzzy from "@leeoniya/ufuzzy";

const SHOW_MAX_MATCHES = 5;

const fuzzy = new uFuzzy();

type SearchResult = {
  id: string;
  title: ReactNode;
  altTitle: ReactNode;
};

export default function BigSearch({ articles }: { articles: ScpArticle[] }) {
  const inputId = useId();

  const [input, setInput] = useState("");
  const [fullMatchCount, setFullMatchCount] = useState(0);
  const [results, setResults] = useState<SearchResult[]>([]);

  const titles = articles.map((a) => uFuzzy.latinize(a.altTitle));

  function handleInputChange(event: ChangeEvent<HTMLInputElement>) {
    setInput(event.target.value);

    let [indexes, info, orders] = fuzzy.search(
      titles,
      event.target.value,
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
          const title = articles[info.idx[order]].title;
          const isSoleMatch = indexes.length === 1;
          return {
            id: title,
            title: isSoleMatch ? title : title.replace(/([0-9])/g, "?"),
            altTitle: uFuzzy.highlight<ReactNode, ReactNode>(
              titles[info.idx[order]],
              info.ranges[order],
              (part, matched) => {
                if (matched) return <YesMatch>{part}</YesMatch>;
                if (isSoleMatch) return part;
                return [
                  ...part.matchAll(/(?<p>[\s\p{P}]+)|(?<np>[^\s\p{P}]+)/gu),
                ].map((seg) => {
                  if (!seg.groups) return seg[0];
                  if (seg.groups.p) return seg[0];
                  if (seg.groups.np)
                    return (
                      <NoMatch>
                        {seg[0].replace(/[a-z]/g, "x").replace(/[^a-z]/g, "X")}
                      </NoMatch>
                    );
                });
              },
              "",
              (a, b) => (
                <>
                  {a}
                  {b}
                </>
              ),
            ),
          };
        }),
      );
    } else {
      setResults([]);
    }
  }

  function handleFormSubmit() {}

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
      action={handleFormSubmit}
      className="flex flex-col items-center gap-1 py-[5rem]"
    >
      <label htmlFor={inputId}>Enter an SCP title:</label>
      <span className="flex w-full gap-1">
        <input
          id={inputId}
          value={input}
          onChange={handleInputChange}
          className="flex-auto rounded border border-gray-300 bg-white p-1 px-1 text-sm text-gray-800 shadow hover:border-gray-400"
        ></input>
        <button
          onClick={() => setInput("")}
          title="Clear input"
          className="flex-none rounded border border-gray-300 px-2 py-1 shadow hover:border-gray-400 active:shadow-none"
        >
          &times;
        </button>
      </span>

      <div>
        <span>
          Matches ({fullMatchCount}){results.length ? ":" : ""}
        </span>
        <output className="flex flex-col gap-1">{matchResults}</output>
      </div>

      <button
        type="submit"
        className="rounded border border-gray-300 px-2 py-1 hover:border-gray-400 enabled:shadow disabled:border-gray-200 disabled:text-gray-400"
        disabled={results.length !== 1}
      >
        Add to list
      </button>
    </form>
  );
}

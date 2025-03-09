"use client";

import { useEffect, useState } from "react";

import BigSearch from "../components/BigSearch";
import { ScpArticle } from "./types";
import SeriesTable from "../components/SeriesTable";
import { getArticles } from "./getArticles";

export default function Quiz() {
  const [articles, setArticles] = useState<ScpArticle[]>([]);
  const [loading, setLoading] = useState("Loading...");

  useEffect(() => {
    (async () => {
      const articles = await getArticles(
        "https://raw.githubusercontent.com/crombird/selectors/refs/heads/main/selectors/alternate-titles.json",
        // /scp-wiki\.wikidot\.com.*scp-series($|-[0-9]+)/,
        /scp-wiki\.wikidot\.com.*scp-series-9/,
        /ACCESS DENIED/,
        "https://api.codetabs.com/v1/proxy/?quest=",
        (message) => setLoading(message),
      );
      setArticles(articles);
      setLoading("");
    })();
  }, []);

  if (loading) {
    return (
      <main>
        <p>{loading}</p>
      </main>
    );
  }

  return (
    <main className="mx-auto max-w-2xl px-2">
      <BigSearch articles={articles}></BigSearch>
      <SeriesTable articles={articles}></SeriesTable>
    </main>
  );
}

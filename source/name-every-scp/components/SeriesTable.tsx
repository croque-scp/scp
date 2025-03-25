import { ScpArticle, SolveArticleHandler } from "@/app/types";

import ArticleRow from "./ArticleRow";
import SeriesGroup from "./SeriesGroup";

export default function SeriesTable({
  articles,
  onSolveArticle,
}: {
  articles: ScpArticle[];
  onSolveArticle: SolveArticleHandler;
}) {
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
        onSolve={onSolveArticle}
      ></ArticleRow>
    ));

    return (
      <SeriesGroup
        key={seriesName}
        seriesName={seriesName}
        count={articlesInSeries.length}
        solvedCount={articlesInSeries.filter((a) => a.solved).length}
      >
        {articleRows}
      </SeriesGroup>
    );
  });

  return (
    <table className="w-full">
      <thead>
        <tr>
          <th>SCP number</th>
          <th></th>
          <th>Title</th>
        </tr>
      </thead>
      {seriesGroups}
    </table>
  );
}

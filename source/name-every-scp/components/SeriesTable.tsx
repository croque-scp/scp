import { ScpArticle, SolveArticleHandler } from "@/app/types";
import {
  TCanvasConfettiInstance,
  TOnInitComponentFn,
} from "react-canvas-confetti/dist/types";

import ArticleRow from "./ArticleRow";
import Confetti from "react-canvas-confetti";
import SeriesGroup from "./SeriesGroup";
import { useRef } from "react";

export default function SeriesTable({
  articles,
  onSolveArticle,
}: {
  articles: ScpArticle[];
  onSolveArticle: SolveArticleHandler;
}) {
  const table = useRef<HTMLTableElement>(null);
  const confettiInstance = useRef<TCanvasConfettiInstance>(null);

  const handleConfettiInit: TOnInitComponentFn = ({ confetti }) => {
    confettiInstance.current = confetti;
  };

  function handleOffscreenSolve() {
    // Particle effect when an article is solved offscreen
    // TODO Make it more obvious where the particles are 'coming from' (e.g. the answer flies down from the big search and the confetti happens after a delay)
    // TODO Add equivalent effect to internal solves for consistent visual language
    if (confettiInstance.current) {
      const opts: confetti.Options = {
        gravity: 0.6,
        origin: { y: 1.1 },
        colors: ["#008236", "#00a63e", "#00c951", "#05df72", "#7bf1a8"],
        disableForReducedMotion: true,
        spread: 60,
        scalar: 0.75,
        startVelocity: 18,
        ticks: 400,
        particleCount: 20,
      };
      for (const x of [0.35, 0.45, 0.55, 0.65]) {
        confettiInstance.current({
          ...opts,
          origin: { ...opts.origin, x },
        });
      }
    }
  }

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
        onOffscreenSolve={handleOffscreenSolve}
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
    <div>
      <table ref={table} className="w-full">
        <thead>
          <tr>
            <th>SCP number</th>
            <th></th>
            <th>Title</th>
          </tr>
        </thead>
        {seriesGroups}
      </table>
      <Confetti
        onInit={handleConfettiInit}
        globalOptions={{ useWorker: true }}
      ></Confetti>
    </div>
  );
}

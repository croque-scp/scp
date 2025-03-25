export type ScpArticle = {
  title: string;
  altTitle: string;
  altTitleSearchable: string;
  seriesName: string;
  slug: string;
  solved: boolean;
};

export type SolveArticleHandler = (article: ScpArticle) => void;

export type NewsResponse = {
  contents: News[];
  totalCount: number;
  offset: number;
  limit: number;
};

export type News = {
  id: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  revisedAt: string;
  title: string;
  content: string;
};

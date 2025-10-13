import { notFound } from "next/navigation";
import { Index } from "@/app/news/[id]/_components";
import { microCmsClient } from "@/libs/microcms-client";
import type { News, NewsResponse } from "@/types/news";

export async function generateStaticParams() {
  const newsList = await microCmsClient.get<NewsResponse>({
    endpoint: "news",
  });

  return newsList.contents.map((news) => ({
    id: news.id,
  }));
}

export default async function Page({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const news = await microCmsClient.get<News>({
    endpoint: `news/${id}`,
  });

  if (!news) {
    notFound();
  }

  return <Index news={news} />;
}

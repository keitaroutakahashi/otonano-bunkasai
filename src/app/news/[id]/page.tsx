import { notFound } from "next/navigation";
import { Index } from "@/app/news/[id]/_components";
import { getFestivals } from "@/features/festivals/api/api";
import { microCmsClient } from "@/libs/microcms-client";
import type { News } from "@/types/news";

export async function generateStaticParams() {
  const festivals = getFestivals();

  return festivals.map((festival) => ({
    id: festival.id.toString(),
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

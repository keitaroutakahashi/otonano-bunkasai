import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Index } from "@/app/news/_components";
import { microCmsClient } from "@/libs/microcms-client";
import type { NewsResponse } from "@/types/news";

export const metadata: Metadata = {
  title: "News",
};

export default async function Page() {
  const newsList = await microCmsClient.get<NewsResponse>({
    endpoint: "news",
  });

  if (!newsList) {
    notFound();
  }

  return <Index newsList={newsList} />;
}

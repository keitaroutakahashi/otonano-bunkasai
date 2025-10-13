import { format } from "@formkit/tempo";
import { Breadcrumb } from "@/app/news/[id]/_components/breadcrumb";
import type { News } from "@/types/news";

type Props = {
  news: News;
};

export const Index = ({ news }: Props) => {
  return (
    <main className="pb-40 pt-20 max-w-3xl mx-auto px-4">
      <h1 className="text-xl md:text-2xl font-bold text-white">{news.title}</h1>
      <div className="mt-8" />
      <p className="text-white font-bold md:text-sm text-xs">
        {format(news.createdAt, "YYYY/MM/DD")}
      </p>
      <div className="mt-5" />
      <Breadcrumb title={news.title} />
      <div className="md:mt-40 mt-20" />
      <div
        // biome-ignore lint/security/noDangerouslySetInnerHtml: rendering trusted HTML content from CMS
        dangerouslySetInnerHTML={{ __html: news.content }}
        className="prose prose-sm md:prose-base prose-invert"
      />
    </main>
  );
};

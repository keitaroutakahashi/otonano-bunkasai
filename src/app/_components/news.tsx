import Link from "next/link";
import { microCmsClient } from "@/libs/microcms-client";
import type { NewsResponse } from "@/types/news";

export const News = async () => {
  const news = await microCmsClient.get<NewsResponse>({
    endpoint: "news",
  });

  return (
    <section>
      <h2 className="text-3xl text-white text-center tracking-widest">NEWS</h2>
      <div className="mt-10" />
      <div className="max-w-3xl mx-auto px-5">
        <ul className="flex flex-col items-center gap-4">
          {news.contents.map((item) => (
            <li key={item.id} className="text-white">
              <Link
                href={`/news/${item.id}`}
                className="font-bold relative after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:h-[1px] after:w-0 after:bg-white after:transition-all after:duration-200 hover:after:w-full text-sm md:text-base"
              >
                {item.title}
              </Link>
            </li>
          ))}
        </ul>
        <div className="mt-12" />
        <div className="flex justify-end">
          <Link
            href="/news/"
            className="font-bold relative after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:h-[1px] after:w-0 after:bg-white after:transition-all after:duration-200 hover:after:w-full text-white text-xs md:text-sm"
          >
            もっと見る
          </Link>
        </div>
      </div>
    </section>
  );
};

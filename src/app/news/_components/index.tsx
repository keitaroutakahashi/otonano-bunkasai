import { format } from "@formkit/tempo";
import Link from "next/link";
import type { NewsResponse } from "@/types/news";

type Props = {
  newsList: NewsResponse;
};

export const Index = ({ newsList }: Props) => {
  return (
    <main className="pb-40 pt-20 max-w-3xl mx-auto px-4">
      <h1 className="text-3xl text-white text-center tracking-widest">NEWS</h1>
      <ul className="md:mt-10 mt-5">
        {newsList.contents.map((news) => (
          <li key={news.id} className="border-b border-gray-500 py-6">
            <p className="md:text-sm text-xs text-gray-400 font-bold">
              {format(news.createdAt, "YYYY/MM/DD")}
            </p>
            <Link
              className="md:text-lg text-sm text-white mt-2 hover:text-primary transition-all duration-200 block"
              href={`/news/${news.id}`}
            >
              {news.title}
            </Link>
          </li>
        ))}
      </ul>
    </main>
  );
};

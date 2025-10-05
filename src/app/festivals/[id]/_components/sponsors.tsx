import { Trophy } from "lucide-react";
import { Title } from "@/app/festivals/[id]/_components/title";

export const Sponsors = () => {
  return (
    <section>
      <Title title="SPONSORS" />
      <div className="mt-20" />
      <div className="max-w-2xl mx-auto">
        <ul className="flex flex-wrap gap-8 justify-center">
          <li className="border rounded-md border-slate-500 text-white md:py-5 py-3 px-8 relative">
            <span className="absolute md:size-10 size-8 -top-3 -left-3 md:-top-4 md:-left-4 bg-background rounded-full">
              <Trophy
                className="inset-center md:size-7 size-5!"
                color="#48CFCB"
              />
            </span>
            <span className="font-bold md:text-lg text-base">Tanaka Taro</span>
          </li>
        </ul>
      </div>
    </section>
  );
};

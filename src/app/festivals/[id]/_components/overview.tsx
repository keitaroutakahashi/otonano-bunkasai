import { Calendar, MapPin } from "lucide-react";
import { Title } from "./title";
import { CountAnimation } from "./countAnimation";

export const Overview = () => {
  return (
    <section className="">
      <Title title="OVERVIEW" />
      <div className="mt-20" />
      <div className="max-w-2xl mx-auto">
        <div className="grid grid-cols-2 place-items-center">
          <div className="gradient-rounded-border text-white p-5 rounded-full size-28 md:size-36 flex justify-center items-center flex-col">
            <div className="">
              <Calendar />
            </div>
            <div className="md:mt-3 mt-2" />
            <p className="md:text-sm text-xs">13/OCT</p>
            <p className="font-bold md:text-xl text-base">2023</p>
          </div>
          <div className="gradient-rounded-border text-white p-5 rounded-full size-28 md:size-36 flex justify-center items-center flex-col">
            <div className="">
              <MapPin />
            </div>
            <div className="md:mt-3 mt-2" />
            <p className="font-bold md:text-xl text-base">神楽音</p>
          </div>
        </div>

        <div className="md:mt-20 mt-16" />

        <ul className="grid md:grid-cols-3 grid-cols-2 gap-8">
          <li className="flex flex-col items-center">
            <CountAnimation count={80} />
            <div className="md:mt-4 mt-2" />
            <p className="text-white font-bold md:text-sm text-xs">観客</p>
          </li>
          <li className="flex flex-col items-center">
            <CountAnimation count={20} />
            <div className="md:mt-4 mt-2" />
            <p className="text-white font-bold md:text-sm text-xs">出演者</p>
          </li>
          <li className="flex flex-col items-center">
            <CountAnimation count={8} />
            <div className="md:mt-4 mt-2" />
            <p className="text-white font-bold md:text-sm text-xs">
              出演グループ
            </p>
          </li>
        </ul>
      </div>
    </section>
  );
};

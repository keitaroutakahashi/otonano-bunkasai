import { format } from "@formkit/tempo";
import { Calendar, MapPin } from "lucide-react";
import type { FC } from "react";
import type { Festival } from "@/data/festivals";
import { CountAnimation } from "@/app/festivals/[id]/_components/countAnimation";
import InfoCircle from "@/app/festivals/[id]/_components/infoCircle";
import { Title } from "@/app/festivals/[id]/_components/title";

type Props = {
  festival: Festival;
};

export const Overview: FC<Props> = ({ festival }) => {
  return (
    <section className="">
      <Title title="OVERVIEW" />
      <div className="mt-20" />
      <div className="max-w-2xl mx-auto">
        <div className="grid grid-cols-2 place-items-center">
          <InfoCircle
            content={
              <>
                <p className="text-base">
                  {format(festival.eventDate, "D,MMM")}
                </p>
                <p className="font-bold md:text-2xl text-xl">
                  {format(festival.eventDate, "YYYY")}
                </p>
              </>
            }
            icon={<Calendar />}
          />
          <InfoCircle
            content={
              <p className="font-bold md:text-xl text-base text-center">
                {festival.venue.name}
              </p>
            }
            icon={<MapPin width={24} height={24} />}
          />
        </div>

        <div className="md:mt-20 mt-16" />

        <ul className="grid md:grid-cols-3 grid-cols-2 gap-8">
          <li className="flex flex-col items-center">
            <CountAnimation count={festival.overview.audience} />
            <div className="md:mt-4 mt-2" />
            <p className="text-white font-bold md:text-sm text-xs">観客</p>
          </li>
          <li className="flex flex-col items-center">
            <CountAnimation count={festival.overview.performers} />
            <div className="md:mt-4 mt-2" />
            <p className="text-white font-bold md:text-sm text-xs">出演者</p>
          </li>
          <li className="flex flex-col items-center">
            <CountAnimation count={festival.overview.groups} />
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

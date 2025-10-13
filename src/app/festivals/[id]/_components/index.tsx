import type { FC } from "react";
import { Flyer } from "@/app/festivals/[id]/_components/flyer";
import { Gallery } from "@/app/festivals/[id]/_components/gallery";
import { Hero } from "@/app/festivals/[id]/_components/hero";
import { MC } from "@/app/festivals/[id]/_components/mc";
import { Menu } from "@/app/festivals/[id]/_components/menu";
import { Overview } from "@/app/festivals/[id]/_components/overview";
import { Performers } from "@/app/festivals/[id]/_components/performers";
import { TimeTable } from "@/app/festivals/[id]/_components/timeTable";
import { Vip } from "@/app/festivals/[id]/_components/vip";
import type { Festival } from "@/data/festivals";

type Props = {
  festival: Festival;
};

export const Index: FC<Props> = ({ festival }) => {
  return (
    <div className="bg-background">
      <Hero festival={festival} />
      <main className="py-40 px-5 max-w-7xl mx-auto">
        <Overview festival={festival} />
        <div className="md:mt-80 mt-60" />
        <Performers festival={festival} />
        <div className="md:mt-80 mt-60" />
        <MC />
        <div className="md:mt-80 mt-60" />
        <TimeTable festival={festival} />
        <div className="md:mt-80 mt-60" />
        <Gallery festival={festival} />
        {festival.vip && (
          <>
            <div className="md:mt-80 mt-60" />
            <Vip festival={festival} />
          </>
        )}
        {festival.menu && (
          <>
            <div className="md:mt-80 mt-60" />
            <Menu festival={festival} />
          </>
        )}
        {festival.flyer && (
          <>
            <div className="md:mt-80 mt-60" />
            <Flyer festival={festival} />
          </>
        )}
      </main>
    </div>
  );
};

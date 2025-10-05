import type { FC } from "react";
import { Flyer } from "@/app/festivals/[id]/_components/flyer";
import { Hero } from "@/app/festivals/[id]/_components/hero";
import { Overview } from "@/app/festivals/[id]/_components/overview";
import { Performers } from "@/app/festivals/[id]/_components/performers";
import { Sponsors } from "@/app/festivals/[id]/_components/sponsors";
import { TimeTable } from "@/app/festivals/[id]/_components/timeTable";
import { Footer } from "@/components/ui/footer/footer";
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
        <TimeTable festival={festival} />
        <div className="md:mt-80 mt-60" />
        <Flyer />
        <div className="md:mt-80 mt-60" />
        <Sponsors />
      </main>
      <Footer />
    </div>
  );
};

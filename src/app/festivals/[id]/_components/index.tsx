import { Footer } from "@/components/ui/footer/footer";
import { Header } from "@/components/ui/header/header";
import type { Festival } from "@/data/festivals";
import type { FC } from "react";
import { Flyer } from "./flyer";
import { Hero } from "./hero";
import { Overview } from "./overview";
import { Performers } from "./performers";
import { Sponsors } from "./sponsors";
import { TimeTable } from "./timeTable";

type Props = {
  festival: Festival;
};

export const Index: FC<Props> = ({ festival }) => {
  return (
    <div className="bg-background">
      <Header />
      <Hero />
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

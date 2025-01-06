import { Footer } from "@/components/ui/footer/footer";
import { Header } from "@/components/ui/header/header";
import { Hero } from "./hero";
import { TimeTable } from "./timeTable";
import { Artists } from "./artists";
import { Overview } from "./overview";
import { Sponsors } from "./sponsors";
import { Flyer } from "./flyer";

export const Index = () => {
  return (
    <div className="bg-background">
      <Header />
      <Hero />
      <main className="py-40 px-5 max-w-7xl mx-auto">
        <Overview />
        <div className="md:mt-80 mt-60" />
        <Artists />
        <div className="md:mt-80 mt-60" />
        <TimeTable />
        <div className="md:mt-80 mt-60" />
        <Flyer />
        <div className="md:mt-80 mt-60" />
        <Sponsors />
      </main>
      <Footer />
    </div>
  );
};

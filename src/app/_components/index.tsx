import { Footer } from "@/components/ui/footer/footer";
import { Festivals } from "@/app/_components/festivals";
import { HeroCarousel } from "@/app/_components/heroCarousel";
import { Introduction } from "@/app/_components/introduction";
import { News } from "@/app/_components/news";

export const Index = () => {
  return (
    <div className="bg-background">
      <main className="pb-40">
        <HeroCarousel />
        <div className="mt-40 md:mt-80" />
        <Introduction />
        <div className="mt-40 md:mt-80" />
        <News />
        <div className="mt-40 md:mt-80" />
        <Festivals />
      </main>
      <Footer />
    </div>
  );
};

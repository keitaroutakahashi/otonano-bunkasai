import { Footer } from "@/components/ui/footer/footer";
import { Header } from "@/components/ui/header/header";
import { Festivals } from "./festivals";
import { HeroCarousel } from "./heroCarousel";
import { Introduction } from "./introduction";
import { News } from "./news";

export const Index = () => {
  return (
    <div className="bg-background">
      <Header />
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

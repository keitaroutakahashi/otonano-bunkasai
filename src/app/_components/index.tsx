import { Footer } from "@/components/ui/footer/footer";
import { Header } from "@/components/ui/header/header";
import { HeroCarousel } from "./heroCarousel";
import { News } from "./news";
import { Festivals } from "./festivals";

export const Index = () => {
  return (
    <div className="bg-background">
      <Header />
      <main className="pb-40">
        <HeroCarousel />
        <div className="mt-20" />
        <News />
        <div className="mt-80" />
        <Festivals />
      </main>
      <Footer />
    </div>
  );
};

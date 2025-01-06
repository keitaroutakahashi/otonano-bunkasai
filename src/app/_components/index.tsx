import { Footer } from "@/components/ui/footer/footer";
import { Header } from "@/components/ui/header/header";
import { HeroCarousel } from "./heroCarousel";
import { Festivals } from "./festivals";
import { Introduction } from "./introduction";

export const Index = () => {
  return (
    <div className="bg-background">
      <Header />
      <main className="pb-40">
        <HeroCarousel />
        <div className="mt-40" />
        {/* <News /> */}
        <Introduction />
        <div className="mt-80" />
        <Festivals />
      </main>
      <Footer />
    </div>
  );
};

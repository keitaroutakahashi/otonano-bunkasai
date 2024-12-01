import { Footer } from "@/components/ui/footer/footer";
import { Header } from "@/components/ui/header/header";
import { HeroCarousel } from "./heroCarousel";

export const Index = () => {
  return (
    <div className="h-screen bg-background">
      <Header />
      <main>
        <HeroCarousel />
        <div className="h-96"></div>
      </main>
      <Footer />
    </div>
  );
};

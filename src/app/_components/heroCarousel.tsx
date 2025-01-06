"use client";

import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { useEffect, useState } from "react";
import { type CarouselApi } from "@/components/ui/carousel";
import { HeroCarouselDot } from "./heroCarouselDot";
import { contents } from "./heroCarouselContents";

export const HeroCarousel = () => {
  const [api, setApi] = useState<CarouselApi>();
  const [currentSlideNumber, setCurrentSlideNumber] = useState(0);

  const handleClickDot = (index: number) => {
    api?.scrollTo(index);
  };

  useEffect(() => {
    if (!api) {
      return;
    }

    api.on("select", () => {
      console.log("Selected index:", api.selectedScrollSnap());
      setCurrentSlideNumber(api.selectedScrollSnap());
    });
  }, [api]);

  return (
    <div className="flex justify-center">
      <Carousel
        setApi={setApi}
        opts={{
          loop: true,
        }}
        plugins={[
          Autoplay({
            delay: 5000,
          }),
        ]}
        className="w-full relative"
      >
        <CarouselContent>
          {contents.map((item) => (
            <CarouselItem key={item.img.src} className="relative h-96 md:h-152">
              <Image
                src={item.img.src}
                fill
                alt={item.img.alt}
                className="object-cover h-96 md:h-152 w-full"
              />
              <div className="h-full w-full top-0 left-0 absolute bg-[rgba(0,0,0,.3)]"></div>
              <div className="flex justify-center items-center h-full relative">
                {item.content()}
              </div>
              <div className="h-40 w-full bottom-0 left-0 absolute bg-gradient-to-t from-[rgb(25,28,33)]"></div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious variant="rectangle" />
        <CarouselNext variant="rectangle" />
        <div className="bottom-10 left-1/2 -translate-x-1/2 absolute">
          <HeroCarouselDot
            currentSlideNumber={currentSlideNumber}
            handleClick={handleClickDot}
          />
        </div>
      </Carousel>
    </div>
  );
};

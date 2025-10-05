"use client";

import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";
import { useEffect, useState } from "react";
import { contents } from "@/app/_components/heroCarouselContents";
import { HeroCarouselDot } from "@/app/_components/heroCarouselDot";
import type { CarouselApi } from "@/components/ui/carousel";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

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
            <CarouselItem
              key={item.img.src}
              className="relative h-110 md:h-152"
            >
              <Image
                src={item.img.src}
                fill
                alt={item.img.alt}
                className="object-cover"
              />
              <div className="h-full w-full top-0 left-0 absolute bg-[rgba(0,0,0,.3)]" />
              <div className="flex items-end pl-10 pb-24 md:pl-20 h-full relative">
                {item.content()}
              </div>
              <div className="h-40 w-full bottom-0 left-0 absolute bg-linear-to-t from-background pointer-events-none" />
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious
          variant="rectangle"
          className="hidden md:block cursor-pointer"
        />
        <CarouselNext
          variant="rectangle"
          className="hidden md:block cursor-pointer"
        />
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

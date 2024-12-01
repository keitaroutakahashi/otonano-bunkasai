"use client";

import { twMerge } from "tailwind-merge";
import { contents } from "./heroCarouselContents";

type Props = {
  currentSlideNumber: number;
  handleClick: (index: number) => void;
};

export const HeroCarouselDot: React.FC<Props> = ({
  currentSlideNumber,
  handleClick,
}) => {
  return (
    <div className="gap-x-4 flex">
      {contents.map((item, i) => (
        <button
          key={item.img.src}
          type="button"
          className={twMerge(
            "size-2 bg-white rounded-full transition-all",
            currentSlideNumber === i && "w-8 h-2 bg-emerald-300"
          )}
          onClick={() => {
            handleClick(i);
          }}
        />
      ))}
    </div>
  );
};

"use client";
import Image from "next/image";
import { useState } from "react";
import { Title } from "@/app/festivals/[id]/_components/title";
import { DialogImage } from "@/components/ui/dialogImage/dialogImage";
import type { Festival } from "@/data/festivals";

type Props = {
  festival: Festival;
};

export const Gallery = ({ festival }: Props) => {
  const [open, setOpen] = useState(false);
  const [startIndex, setStartIndex] = useState(0);

  const handleClickImage = (index: number) => {
    setStartIndex(index);
    setOpen(true);
  };

  return (
    <section>
      <Title title="GALLERY" />
      <div className="mt-20" />
      <ul className="grid grid-cols-2 md:grid-cols-3 md:gap-4 gap-2">
        {festival.gallery.map((path, index) => (
          <li
            key={path}
            className="relative h-24 md:h-52 cursor-pointer"
            onClick={() => handleClickImage(index)}
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") {
                handleClickImage(index);
              }
            }}
          >
            <Image src={path} alt="" fill className="object-cover" />
          </li>
        ))}
      </ul>

      <DialogImage
        open={open}
        images={festival.gallery.slice()}
        startIndex={startIndex}
        handleClose={() => setOpen(false)}
      />
    </section>
  );
};

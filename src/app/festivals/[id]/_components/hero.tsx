import { format } from "@formkit/tempo";
import Image from "next/image";
import type { Festival } from "@/data/festivals";

type Props = {
  festival: Festival;
};

export const Hero = ({ festival }: Props) => {
  return (
    <div className="">
      <div className="relative h-110 md:h-152">
        <Image
          src={`/images/festivals/0${festival.id}/hero.jpg`}
          fill
          alt=""
          className="object-cover"
        />
        <div className="h-full w-full top-0 left-0 absolute bg-[rgba(0,0,0,.3)]" />
        <div className="flex items-end pl-10 pb-24 md:pl-20 h-full relative">
          <p className="text-white text-xl md:text-4xl font-bold tracking-widest">
            {festival.titleJa}
            <span className="text-sm block mt-2">
              @{festival.venue.name} {format(festival.eventDate, "YYYY/MM/DD")}
            </span>
          </p>
          <p className="mt-5 text-sm md:text-base">{festival.titleJa}</p>
        </div>
        <div className="h-40 w-full bottom-0 left-0 absolute bg-linear-to-t from-background pointer-events-none" />
      </div>
    </div>
  );
};

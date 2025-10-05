import Image from "next/image";
import type { FC } from "react";
import { Title } from "@/app/festivals/[id]/_components/title";
import type { Festival } from "@/data/festivals";

type Props = {
  festival: Festival;
};

export const Performers: FC<Props> = ({ festival }) => {
  return (
    <section>
      <Title title="PERFORMERS" />
      <div className="mt-20" />
      <ul className="grid md:grid-cols-3 grid-cols-2 gap-5">
        {festival.performers.map((performer) => (
          <li
            key={performer.id}
            className="relative md:aspect-[3/2] aspect-[4/3]"
          >
            <Image
              src={performer.image}
              fill
              alt={performer.name}
              className="object-cover"
            />
            <div className="absolute md:h-14 h-8 w-full bg-gradient-to-t bottom-0 left-0 from-black to-transparent" />
            <p className="inset-x-center md:bottom-3 bottom-1 font-bold text-white text-sm md:text-base w-full text-center">
              {performer.name}
            </p>
          </li>
        ))}
      </ul>
    </section>
  );
};

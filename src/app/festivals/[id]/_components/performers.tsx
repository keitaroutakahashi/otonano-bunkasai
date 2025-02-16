import type { Festival } from "@/data/festivals";
import Image from "next/image";
import type { FC } from "react";
import { Title } from "./title";

type Props = {
  festival: Festival;
};

export const Performers: FC<Props> = ({ festival }) => {
  return (
    <section>
      <Title title="PERFORMERS" />
      <div className="mt-20" />
      <ul className="grid md:grid-cols-3 grid-cols-2">
        {festival.performers.map((performer) => (
          <li key={performer.id} className="relative aspect-video">
            <Image
              src={performer.image}
              fill
              alt={performer.name}
              className="object-cover aspect-video"
            />
            <p className="inset-x-center bottom-3 font-bold text-white">
              {performer.name}
            </p>
          </li>
        ))}
      </ul>
    </section>
  );
};

import Image from "next/image";
import { Title } from "@/app/festivals/[id]/_components/title";
import type { Festival } from "@/data/festivals";

type Props = {
  festival: Festival;
};

export const Gallery = ({ festival }: Props) => {
  return (
    <section>
      <Title title="GALLERY" />
      <div className="mt-20" />
      <ul className="grid grid-cols-2 md:grid-cols-3 md:gap-4 gap-2">
        {festival.gallery.map((path) => (
          <li key={path} className="relative h-24 md:h-52">
            <Image src={path} alt="" fill className="object-cover" />
          </li>
        ))}
      </ul>
    </section>
  );
};

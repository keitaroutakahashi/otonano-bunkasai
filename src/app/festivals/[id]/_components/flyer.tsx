import Image from "next/image";
import { Title } from "@/app/festivals/[id]/_components/title";
import type { Festival } from "@/data/festivals";

type Props = {
  festival: Festival;
};

export const Flyer = ({ festival }: Props) => {
  if (!festival.flyer) {
    return null;
  }

  return (
    <section>
      <Title title="FLYER" />
      <div className="mt-20" />
      <div className="relative h-96 md:h-152">
        <Image
          src={festival.flyer}
          alt="Flyer"
          fill
          className="object-contain"
        />
      </div>
    </section>
  );
};

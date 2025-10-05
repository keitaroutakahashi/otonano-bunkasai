import Image from "next/image";
import { Title } from "@/app/festivals/[id]/_components/title";
import type { Festival } from "@/data/festivals";

type Props = {
  festival: Festival;
};

export const Menu = ({ festival }: Props) => {
  if (!festival.menu) {
    return null;
  }

  return (
    <section>
      <Title title="MENU" />
      <div className="mt-20" />
      <div className="relative h-96 md:h-152">
        <Image src={festival.menu} alt="Menu" fill className="object-contain" />
      </div>
    </section>
  );
};

import Image from "next/image";
import { Title } from "@/app/festivals/[id]/_components/title";

export const Flyer = () => {
  return (
    <section>
      <Title title="FLYER" />
      <div className="mt-20" />
      <div className="relative h-96 md:h-152">
        <Image
          src="/images/festivals/03/flyer.jpg"
          alt="Flyer"
          fill
          className="object-contain"
        />
      </div>
    </section>
  );
};

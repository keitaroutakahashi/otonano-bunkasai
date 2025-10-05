import Image from "next/image";
import { Title } from "@/app/festivals/[id]/_components/title";

export const MC = () => {
  return (
    <section>
      <Title title="MC" />
      <div className="mt-20" />
      <div className="relative md:w-110 w-80 aspect-[3/2] mx-auto">
        <Image
          src="/images/mc/ryuji.jpg"
          fill
          alt="Ryuji"
          className="object-cover"
        />
        <div className="absolute md:h-14 h-8 w-full bg-gradient-to-t bottom-0 left-0 from-black to-transparent" />
        <p className="inset-x-center md:bottom-3 bottom-1 font-bold text-white text-sm md:text-xl w-full text-center">
          Ryuji
        </p>
      </div>
    </section>
  );
};

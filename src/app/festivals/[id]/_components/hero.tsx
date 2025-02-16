import { getFestival } from "@/features/festivals/api/api";
import Image from "next/image";

export const Hero = () => {
  return (
    <div className="">
      <div className="relative h-96 md:h-152">
        <Image
          src="/images/hero-02.jpg"
          fill
          alt="aa"
          className="object-cover"
        />
        <div className="inset-center md:translate-x-0 text-center md:text-left md:left-40 text-white">
          <p className="md:text-8xl text-4xl">
            3rd
            <br />
            Festival
          </p>
          <p className="mt-5 text-sm md:text-base">第3回大人の文化祭</p>
        </div>
        <div className="h-20 w-full bottom-0 left-0 absolute bg-gradient-to-t from-[rgb(25,28,33)]" />
      </div>
    </div>
  );
};

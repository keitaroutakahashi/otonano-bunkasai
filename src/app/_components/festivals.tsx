import Image from "next/image";
import Link from "next/link";
import { contents } from "@/app/_components/heroCarouselContents";

export const Festivals = () => {
  return (
    <section className="px-0 md:px-5 max-w-7xl mx-auto">
      <h2 className="text-3xl text-white text-center tracking-widest">
        FESTIVALS
      </h2>
      <div className="mt-10" />
      <ul className="relative grid md:grid-cols-2">
        {contents.map((item) => (
          <li key={item.id} className="relative h-32 md:h-56">
            <Link
              href={`/festivals/${item.id}`}
              className="relative block h-full w-full overflow-hidden group"
            >
              <Image
                src={item.img.src}
                fill
                alt={item.img.alt}
                className="object-cover transition-all duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black opacity-50 transition-opacity duration-300 group-hover:opacity-20" />
              <p className="absolute bottom-0 left-0 p-2 md:p-5 text-white text-base md:text-xl font-bold pointer-events-none">
                {item.img.alt}
              </p>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
};

import Image from "next/image";
import Link from "next/link";

export const Festivals = () => {
  return (
    <section className="px-0 md:px-5 max-w-7xl mx-auto">
      <h2 className="text-3xl text-white text-center tracking-widest">
        FESTIVALS
      </h2>
      <div className="mt-10" />
      <ul className="relative grid grid-cols-2">
        <li className="relative h-40">
          <Link
            href="/festivals/1"
            className="relative block h-full w-full overflow-hidden"
          >
            <Image
              src="/images/hero-01.jpg"
              fill
              alt="aa"
              className="object-cover transition-all duration-300 hover:scale-105 hover:brightness-110"
            />
          </Link>
        </li>
        <li className="relative h-40">
          <Link
            href="/festivals/1"
            className="relative block h-full w-full overflow-hidden"
          >
            <Image
              src="/images/hero-02.jpg"
              fill
              alt="aa"
              className="object-cover transition-all duration-300 hover:scale-105 hover:brightness-110"
            />
          </Link>
        </li>
        <li className="relative h-40">
          <Link
            href="/festivals/1"
            className="relative block h-full w-full overflow-hidden"
          >
            <Image
              src="/images/hero-03.jpg"
              fill
              alt="aa"
              className="object-cover transition-all duration-300 hover:scale-105 hover:brightness-110"
            />
          </Link>
        </li>
      </ul>
    </section>
  );
};

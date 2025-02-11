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
            className="hover:opacity-60 transition-opacity"
          >
            <Image
              src="/images/hero-01.jpg"
              fill
              alt="aa"
              className="object-cover"
            />
          </Link>
        </li>
        <li className="relative h-40">
          <Link
            href="/festivals/1"
            className="hover:opacity-60 transition-opacity"
          >
            <Image
              src="/images/hero-02.jpg"
              fill
              alt="aa"
              className="object-cover"
            />
          </Link>
        </li>
        <li className="relative h-40">
          <Link
            href="/festivals/1"
            className="hover:opacity-60 transition-opacity"
          >
            <Image
              src="/images/hero-03.jpg"
              fill
              alt="aa"
              className="object-cover"
            />
          </Link>
        </li>
      </ul>
    </section>
  );
};

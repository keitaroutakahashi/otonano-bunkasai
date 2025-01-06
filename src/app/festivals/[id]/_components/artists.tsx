import Image from "next/image";
import { Title } from "./title";

export const Artists = () => {
  return (
    <section>
      <Title title="ARTISTS" />
      <div className="mt-20" />
      <ul className="grid md:grid-cols-3 grid-cols-2">
        {Array.from({ length: 4 }).map((_, i) => (
          <li key={i} className="relative aspect-video">
            <Image
              src="/images/hero-01.jpg"
              fill
              alt={"f"}
              className="object-cover aspect-video"
            />
            <p className="inset-x-center bottom-3 font-bold text-white">
              Official 髭 oyaji
            </p>
          </li>
        ))}
      </ul>
    </section>
  );
};

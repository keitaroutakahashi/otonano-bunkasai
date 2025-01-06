import Image from "next/image";

export const Festivals = () => {
  return (
    <div className="">
      <div className="relative grid grid-cols-2">
        <div className="relative h-40">
          <Image
            src="/images/hero-01.jpg"
            fill
            alt="aa"
            className="object-cover"
          />
        </div>
        <div className="relative h-40">
          <Image
            src="/images/hero-02.jpg"
            fill
            alt="aa"
            className="object-cover"
          />
        </div>
        <div className="relative h-40">
          <Image
            src="/images/hero-03.jpg"
            fill
            alt="aa"
            className="object-cover"
          />
        </div>
      </div>
    </div>
  );
};

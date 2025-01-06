import Image from "next/image";

export const News = () => {
  return (
    <section>
      <h2 className="text-3xl text-white text-center">NEWS</h2>
      <ul className="grid grid-cols-3">
        <li>
          <div className="border border-white relative size-72">
            <Image
              src="/images/hero-01.jpg"
              fill
              alt="aa"
              className="osbject-cover absolute size-72 !top-5 !left-5"
            />
          </div>
        </li>
      </ul>
    </section>
  );
};

import Link from "next/link";

export const Header = () => {
  return (
    <header className="py-5 absolute top-0 left-0 w-full z-10">
      <nav className="">
        <ul className="flex gap-x-20 pl-10 md:pl-20">
          {["大人の文化祭"].map((item) => (
            <li
              key={item}
              className="text-white hover:text-primary transition-colors duration-300 md:text-lg"
            >
              <Link href="/">{item}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

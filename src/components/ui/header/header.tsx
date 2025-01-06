import Link from "next/link";

export const Header = () => {
  return (
    <header className="p-5 hidden md:block fixed top-0 left-0 w-full z-10">
      <nav className="">
        <ul className="flex gap-x-20 pl-40">
          {["Home", "About", "Teams"].map((item) => (
            <li
              key={item}
              className="text-white hover:text-primary transition-colors duration-300"
            >
              <Link href="/">{item}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

import Link from "next/link";

export const Header = () => {
  return (
    <header className="p-5">
      <nav className="">
        <ul className="flex gap-x-20 pl-40">
          {["Home", "About", "Teams"].map((item) => (
            <li key={item} className="text-white text-lg">
              <Link href="/">{item}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

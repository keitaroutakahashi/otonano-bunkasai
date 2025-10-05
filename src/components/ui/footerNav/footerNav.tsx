import Link from "next/link";

type Props = {
  list: { name: string; href: string }[];
};

export const FooterNav = ({ list }: Props) => {
  return (
    <ul>
      {list.map((item, _index) => (
        <li key={item.name} className="not-first:mt-2">
          <Link
            href={item.href}
            className="text-white text-sm relative after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:h-[1px] after:w-0 after:bg-white after:transition-all after:duration-200 hover:after:w-full"
          >
            {item.name}
          </Link>
        </li>
      ))}
    </ul>
  );
};

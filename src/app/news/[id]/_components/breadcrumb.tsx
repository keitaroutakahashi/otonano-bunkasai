import { ChevronRight } from "lucide-react";
import Link from "next/link";

type Props = { title: string };

export const Breadcrumb = ({ title }: Props) => {
  return (
    <nav className="flex justify-end">
      <ul className="flex gap-x-2 text-white text-sm overflow-x-scroll whitespace-nowrap md:whitespace-normal md:overflow-x-auto">
        <li>
          <div className="flex items-center gap-x-1">
            <Link href="/">Home</Link>
            <ChevronRight size={16} />
          </div>
        </li>
        <li>
          <div className="flex items-center gap-x-1">
            <Link href="/news">News</Link>
            <ChevronRight size={16} />
          </div>
        </li>
        <li className="font-bold text-primary">{title}</li>
      </ul>
    </nav>
  );
};

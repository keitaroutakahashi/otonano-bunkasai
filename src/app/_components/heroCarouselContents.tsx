import Link from "next/link";

export const contents = [
  {
    id: 1,
    img: {
      src: "/images/festivals/01/hero.jpg",
      alt: "第1回大人の文化祭",
    },
    content: () => {
      return (
        <p className="text-white text-xl md:text-4xl font-bold tracking-widest">
          <Link href="/festivals/1" className="underline block">
            第1回
            <br />
            大人の文化祭
          </Link>
          <span className="text-sm block mt-2">@TOGI BAR 2023/12/09</span>
        </p>
      );
    },
  },
  {
    id: 2,
    img: {
      src: "/images/festivals/02/hero.jpg",
      alt: "第2回大人の文化祭",
    },
    content: () => {
      return (
        <p className="text-white text-xl md:text-4xl font-bold tracking-widest">
          <Link href="/festivals/2" className="underline block">
            第2回
            <br />
            大人の文化祭
          </Link>
          <span className="text-sm">@神楽音 2024/10/26</span>
        </p>
      );
    },
  },
  {
    id: 3,
    img: {
      src: "/images/festivals/03/hero.jpg",
      alt: "第3回大人の文化祭",
    },
    content: () => {
      return (
        <p className="text-white text-xl md:text-4xl font-bold tracking-widest">
          <Link href="/festivals/3" className="underline block">
            第3回
            <br />
            大人の文化祭
          </Link>
          <span className="text-sm">@神楽音 2025/09/13</span>
        </p>
      );
    },
  },
];

import Link from "next/link";

export const contents = [
  {
    img: {
      src: "/images/hero-01.jpg",
      alt: "Picture of the author",
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
    img: {
      src: "/images/hero-02.jpg",
      alt: "Picture of the author",
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
    img: {
      src: "/images/hero-03.jpg",
      alt: "Picture of the author",
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

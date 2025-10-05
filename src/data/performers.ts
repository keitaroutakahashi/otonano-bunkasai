export const PERFORMERS = [
  {
    id: 1,
    name: "Official髭oyaji",
    image: "/images/hero-01.jpg",
  },
  {
    id: 2,
    name: "イケメン直列繋ぎ",
    image: "/images/hero-02.jpg",
  },
  {
    id: 3,
    name: "平田憲太郎",
    image: "/images/hero-02.jpg",
  },
  {
    id: 4,
    name: "うちゃぴ",
    image: "/images/hero-02.jpg",
  },
  {
    id: 5,
    name: "はらぼーけんぼー",
    image: "/images/hero-02.jpg",
  },
  {
    id: 6,
    name: "ちずる",
    image: "/images/hero-02.jpg",
  },
] as const;

export type Performers = (typeof PERFORMERS)[number];

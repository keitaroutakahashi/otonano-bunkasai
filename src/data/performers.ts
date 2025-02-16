export const PERFORMERS = [
  {
    id: 1,
    name: "Official 髭 oyaji",
    image: "/images/hero-01.jpg",
  },
  {
    id: 2,
    name: "イケメン直列繋ぎ",
    image: "/images/hero-02.jpg",
  },
] as const;

export type Performers = (typeof PERFORMERS)[number];

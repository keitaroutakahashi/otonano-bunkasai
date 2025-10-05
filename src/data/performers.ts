export const PERFORMERS = [
  {
    id: 1,
    name: "Official髭oyaji",
    image: "/images/performers/official-higeoyaji/main.jpg",
    slug: "official-higeoyaji",
  },
  {
    id: 2,
    name: "イケメン直列繋ぎ",
    image: "/images/performers/ikemen-choku-retsu-tsunagi/main.jpg",
    slug: "ikemen-choku-retsu-tsunagi",
  },
  {
    id: 3,
    name: "ひらけん",
    image: "/images/performers/hiraken/main.jpg",
    slug: "hiraken",
  },
  {
    id: 4,
    name: "うちゃぴ",
    image: "/images/performers/uchapi/main.jpg",
    slug: "uchapi",
  },
  {
    id: 5,
    name: "はらぼーけんぼー",
    image: "/images/performers/harabo-kenbo/main.jpg",
    slug: "harabo-kenbo",
  },
  {
    id: 6,
    name: "ちずる",
    image: "/images/performers/chizuru/main.jpg",
    slug: "chizuru",
  },
  {
    id: 7,
    name: "アルケミーバンド",
    image: "/images/performers/alchemy/main.jpg",
    slug: "alchemy",
  },
  {
    id: 8,
    name: "CFS",
    image: "/images/performers/cfs/main.jpg",
    slug: "cfs",
  },
  {
    id: 9,
    name: "Absol(u)te",
    image: "/images/performers/absolute/main.jpg",
    slug: "absolute",
  },
  {
    id: 10,
    name: "FK",
    image: "/images/performers/fk/main.jpg",
    slug: "fk",
  },
  {
    id: 11,
    name: "神楽坂デッドボールズ",
    image: "/images/performers/kagurazaka-deadballs/main.jpg",
    slug: "kagurazaka-deadballs",
  },
  {
    id: 12,
    name: "SUPERFLY",
    image: "/images/performers/superfly/main.jpg",
    slug: "superfly",
  },
  {
    id: 13,
    name: "チーム宮崎",
    image: "/images/performers/team-miyazaki/main.jpg",
    slug: "team-miyazaki",
  },
  {
    id: 14,
    name: "PRETTY STREET",
    image: "/images/performers/pretty-street/main.jpg",
    slug: "pretty-street",
  },
  {
    id: 15,
    name: "GeeS with K",
    image: "/images/performers/gees-with-k/main.jpg",
    slug: "gees-with-k",
  },
] as const;

export type Performers = (typeof PERFORMERS)[number];

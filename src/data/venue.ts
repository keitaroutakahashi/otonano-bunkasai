export const VENUE = [
  {
    id: 1,
    name: "LIVE HOUSE TOGI BAR",
    address: "東京都渋谷区本町4-19-1 B1",
    link: "https://togibar.com/",
  },
  {
    id: 2,
    name: "神楽音",
    address: "東京都新宿区神楽坂6-48 TOMOS神楽坂ビルB1F",
    link: "https://kagurane.com/schedules/",
  },
] as const;

export type Venue = (typeof VENUE)[number];

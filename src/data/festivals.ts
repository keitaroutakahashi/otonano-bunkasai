import { PERFORMERS } from "@/data/performers";
import { VENUE } from "@/data/venue";

export const FESTIVALS = [
  {
    id: 1,
    times: 1,
    status: "finished",
    title: "1st Festival",
    titleJa: "第1回大人の文化祭",
    eventDate: "2023-10-13T00:00:00",
    performers: [
      PERFORMERS[0],
      PERFORMERS[1],
      PERFORMERS[2],
      PERFORMERS[3],
      PERFORMERS[4],
      PERFORMERS[5],
    ],
    venue: VENUE[0],
    overview: {
      audience: 47,
      performers: 16,
      groups: 6,
    },
    gallery: [
      "/images/festivals/01/gallery/01.jpg",
      "/images/festivals/01/gallery/02.jpg",
      "/images/festivals/01/gallery/03.jpg",
      "/images/festivals/01/gallery/04.jpg",
      "/images/festivals/01/gallery/05.jpg",
      "/images/festivals/01/gallery/06.jpg",
      "/images/festivals/01/gallery/07.jpg",
      "/images/festivals/01/gallery/08.jpg",
      "/images/festivals/01/gallery/09.jpg",
    ],
    flyer: null,
    menu: null,
    vip: null,
    timeTable: [
      {
        id: 1,
        startTime: "2023-10-13T16:00:00",
        endTime: "2023-10-13T17:00:00",
        title: "開場",
        program: null,
      },
      {
        id: 2,
        startTime: "2023-10-13T17:00:00",
        endTime: null,
        title: "開演",
        program: null,
      },
      {
        id: 3,
        startTime: "2023-10-13T17:00:00",
        endTime: "2023-10-13T17:05:00",
        title: "オープニングムービー",
        program: null,
      },
      {
        id: 4,
        startTime: "2023-10-13T17:05:00",
        endTime: "2023-10-13T17:40:00",
        title: PERFORMERS[1].name,
        program: [
          {
            title: "高嶺の花子さん / back number",
          },
          {
            title: "怪獣の花唄 / Vaundy",
          },
        ],
      },
      {
        id: 5,
        startTime: "2023-10-13T17:40:00",
        endTime: "2023-10-13T18:00:00",
        title: PERFORMERS[2].name,
        program: [
          {
            title: "西荻窪 / ひらけん",
          },
          {
            title: "芦ノ湖のこのこ / ひらけん",
          },
        ],
      },
      {
        id: 6,
        startTime: "2023-10-13T18:00:00",
        endTime: "2023-10-13T18:30:00",
        title: PERFORMERS[3].name,
        program: [
          {
            title: "美少女無罪♡パイレーツ / 宝鐘マリン",
          },
        ],
      },
      {
        id: 7,
        startTime: "2023-10-13T18:30:00",
        endTime: "2023-10-13T18:50:00",
        title: "休憩",
        program: null,
      },
      {
        id: 8,
        startTime: "2023-10-13T18:50:00",
        endTime: "2023-10-13T19:35:00",
        title: PERFORMERS[4].name,
        program: [
          {
            title: "DJ & ダンス",
          },
        ],
      },
      {
        id: 9,
        startTime: "2023-10-13T19:35:00",
        endTime: "2023-10-13T19:50:00",
        title: PERFORMERS[5].name,
        program: [
          {
            title: "旅立ちの日に",
          },
        ],
      },
      {
        id: 10,
        startTime: "2023-10-13T19:50:00",
        endTime: "2023-10-13T20:00:00",
        title: PERFORMERS[0].name,
        program: [
          {
            title: "LOVE YOU ONLY / TOKIO",
          },
        ],
      },
      {
        id: 11,
        startTime: "2023-10-13T20:15:00",
        endTime: null,
        title: "終演",
        program: null,
      },
    ],
  },
  {
    id: 2,
    times: 2,
    status: "finished",
    title: "Festival 2",
    titleJa: "第2回大人の文化祭",
    eventDate: "2024-10-26T00:00:00",
    performers: [
      PERFORMERS[0],
      PERFORMERS[1],
      PERFORMERS[2],
      PERFORMERS[3],
      PERFORMERS[4],
      PERFORMERS[6],
      PERFORMERS[7],
      PERFORMERS[8],
    ],
    venue: VENUE[1],
    overview: {
      audience: 78,
      performers: 25,
      groups: 8,
    },
    gallery: [
      "/images/festivals/02/gallery/01.jpg",
      "/images/festivals/02/gallery/02.jpg",
      "/images/festivals/02/gallery/03.jpg",
      "/images/festivals/02/gallery/04.jpg",
      "/images/festivals/02/gallery/05.jpg",
      "/images/festivals/02/gallery/06.jpg",
      "/images/festivals/02/gallery/07.jpg",
      "/images/festivals/02/gallery/08.jpg",
      "/images/festivals/02/gallery/09.jpg",
    ],
    flyer: "/images/festivals/02/flyer.jpg",
    menu: "/images/festivals/02/menu.jpg",
    vip: ["Tsuzuki", "Harajima", "Namioka", "Kunikata", "Yuji", "Yanase"],
    timeTable: [
      {
        id: 2,
        startTime: "2024-10-26T18:00:00",
        endTime: "2024-10-26T18:30:00",
        title: "開場",
        program: null,
      },
      {
        id: 3,
        startTime: "2024-10-26T18:30:00",
        endTime: null,
        title: "開演",
        program: null,
      },
      {
        id: 4,
        startTime: "2024-10-26T18:30:00",
        endTime: "2024-10-26T18:35:00",
        title: "オープニングムービー",
        program: null,
      },
      {
        id: 5,
        startTime: "2024-10-26T18:35:00",
        endTime: "2024-10-26T18:45:00",
        title: PERFORMERS[6].name,
        program: [
          {
            title: "ギリギリガガンガン / ザ・クロマニヨンズ",
          },
        ],
      },
      {
        id: 6,
        startTime: "2024-10-26T18:55:00",
        endTime: "2024-10-26T19:05:00",
        title: PERFORMERS[2].name,
        program: [
          {
            title: "西荻窪 / ひらけん",
          },
        ],
      },
      {
        id: 7,
        startTime: "2024-10-26T19:15:00",
        endTime: "2024-10-26T19:25:00",
        title: PERFORMERS[7].name,
        program: [
          {
            title: "The Feels / TWICE",
          },
          {
            title: "Dynamite / BTS",
          },
        ],
      },
      {
        id: 8,
        startTime: "2024-10-26T19:35:00",
        endTime: "2024-10-26T19:45:00",
        title: PERFORMERS[8].name,
        program: [
          {
            title: "GLAMOROUS SKY / 中島美嘉",
          },
          {
            title: "God knows... / 涼宮ハルヒ",
          },
        ],
      },
      {
        id: 9,
        startTime: "2024-10-26T19:55:00",
        endTime: "2024-10-26T20:05:00",
        title: PERFORMERS[4].name,
        program: [
          {
            title: "DJ",
          },
        ],
      },
      {
        id: 10,
        startTime: "2024-10-26T20:15:00",
        endTime: "2024-10-26T20:35:00",
        title: PERFORMERS[1].name,
        program: [
          {
            title: "怪盗 / back number",
          },
          {
            title: "怪物 / YOASOBI",
          },
          {
            title: "怪獣の花唄 / Vaundy",
          },
        ],
      },
      {
        id: 11,
        startTime: "2024-10-26T20:45:00",
        endTime: "2024-10-26T20:55:00",
        title: PERFORMERS[3].name,
        program: [
          {
            title: "I'm Your Treasure Box / 宝鐘マリン",
          },
        ],
      },
      {
        id: 12,
        startTime: "2024-10-26T21:05:00",
        endTime: "2024-10-26T21:15:00",
        title: PERFORMERS[0].name,
        program: [
          {
            title: "リンダリンダ / THE BLUE HEARTS",
          },
        ],
      },
      {
        id: 13,
        startTime: "2024-10-26T21:25:00",
        endTime: null,
        title: "終演",
        program: null,
      },
    ],
  },
  {
    id: 3,
    times: 3,
    status: "finished",
    title: "Festival 2",
    titleJa: "第3回大人の文化祭",
    eventDate: "2025-09-13T00:00:00",
    performers: [
      PERFORMERS[0],
      PERFORMERS[3],
      PERFORMERS[4],
      PERFORMERS[6],
      PERFORMERS[7],
      PERFORMERS[9],
      PERFORMERS[10],
      PERFORMERS[11],
      PERFORMERS[12],
      PERFORMERS[13],
      PERFORMERS[14],
    ],
    venue: VENUE[1],
    overview: {
      audience: 99,
      performers: 34,
      groups: 11,
    },
    gallery: [
      "/images/festivals/02/gallery/01.jpg",
      "/images/festivals/02/gallery/02.jpg",
      "/images/festivals/02/gallery/03.jpg",
      "/images/festivals/02/gallery/04.jpg",
      "/images/festivals/02/gallery/05.jpg",
      "/images/festivals/02/gallery/06.jpg",
      "/images/festivals/02/gallery/07.jpg",
      "/images/festivals/02/gallery/08.jpg",
      "/images/festivals/02/gallery/09.jpg",
    ],
    flyer: "/images/festivals/03/flyer.jpg",
    menu: "/images/festivals/03/menu.jpg",
    vip: ["Tsuzuki", "Harajima", "Namioka", "Kunikata", "Yuji", "Yanase"],
    timeTable: [
      {
        id: 10,
        startTime: "2025-09-13T17:00:00",
        endTime: "2025-09-13T17:30:00",
        title: "開場",
        program: null,
      },
      {
        id: 20,
        startTime: "2025-09-13T17:30:00",
        endTime: null,
        title: "開演",
        program: null,
      },
      {
        id: 30,
        startTime: "2025-09-13T17:30:00",
        endTime: "2025-09-13T17:35:00",
        title: "オープニングムービー",
        program: null,
      },
      {
        id: 40,
        startTime: "2025-09-13T17:35:00",
        endTime: "2025-09-13T17:50:00",
        title: PERFORMERS[6].name,
        program: [
          {
            title: "人にやさしく/THE BLUE HEARTS",
          },
          {
            title: "遥か彼方/ASIAN KUNG-FU GENERATION",
          },
        ],
      },
      {
        id: 50,
        startTime: "2025-09-13T18:00:00",
        endTime: "2025-09-13T18:15:00",
        title: PERFORMERS[10].name,
        program: [
          {
            title: "第ゼロ感/10-FEET",
          },
          {
            title: "恋のメガラバ/マキシマム ザ ホルモン",
          },
        ],
      },
      {
        id: 60,
        startTime: "2025-09-13T18:25:00",
        endTime: "2025-09-13T18:40:00",
        title: PERFORMERS[11].name,
        program: [
          {
            title: "フライングゲット/AKB48",
          },
          {
            title: "Butter-Fly/和田光司",
          },
        ],
      },
      {
        id: 70,
        startTime: "2025-09-13T18:50:00",
        endTime: "2025-09-13T19:05:00",
        title: PERFORMERS[9].name,
        program: [
          {
            title: "花束のかわりにメロディーを/清水翔太",
          },
        ],
      },
      {
        id: 80,
        startTime: "2025-09-19T19:15:00",
        endTime: "2025-09-19T19:20:00",
        title: PERFORMERS[12].name,
        program: [
          {
            title: "出来っこないをやらなくちゃ/サンボマスター",
          },
        ],
      },
      {
        id: 90,
        startTime: "2025-09-19T19:30:00",
        endTime: "2025-09-19T19:40:00",
        title: PERFORMERS[4].name,
        program: [
          {
            title: "DJ",
          },
        ],
      },
      {
        id: 100,
        startTime: "2025-09-19T19:50:00",
        endTime: "2025-09-19T20:00:00",
        title: PERFORMERS[3].name,
        program: [
          {
            title: "DJAhoy!!我ら宝鐘海賊団/宝鐘マリン",
          },
        ],
      },
      {
        id: 110,
        startTime: "2025-09-19T20:10:00",
        endTime: "2025-09-19T20:20:00",
        title: PERFORMERS[13].name,
        program: [
          {
            title: "かわいいだけじゃだめですか？/CUTIE STREET",
          },
        ],
      },
      {
        id: 120,
        startTime: "2025-09-19T20:30:00",
        endTime: "2025-09-19T20:45:00",
        title: PERFORMERS[7].name,
        program: [
          {
            title: "LOVEマシーン/モーニング娘。",
          },
          {
            title: "S.O.S./ピンク・レディー",
          },
          {
            title: "恋愛レボリューション/モーニング娘。",
          },
        ],
      },
      {
        id: 130,
        startTime: "2025-09-19T20:55:00",
        endTime: "2025-09-19T21:10:00",
        title: PERFORMERS[14].name,
        program: [
          {
            title: "琉球愛歌/MONGOL800",
          },
          {
            title: "ずっと好きだった/斉藤和義",
          },
        ],
      },
      {
        id: 140,
        startTime: "2025-09-19T21:20:00",
        endTime: "2025-09-19T21:35:00",
        title: PERFORMERS[0].name,
        program: [
          {
            title: "TRAIN-TRAIN/THE BLUE HEARTS",
          },
          {
            title: "リンダリンダ/THE BLUE HEARTS",
          },
        ],
      },
      {
        id: 200,
        startTime: "2025-09-19T21:40:00",
        endTime: null,
        title: "終演",
        program: null,
      },
    ],
  },
] as const;

export type Festival = (typeof FESTIVALS)[number];

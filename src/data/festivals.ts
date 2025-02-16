import { PERFORMERS } from "./performers";
import { VENUE } from "./venue";

export const FESTIVALS = [
  {
    id: 1,
    times: 1,
    status: "finished",
    title: "Festival 1",
    eventDate: "2023-10-13T00:00:00",
    performers: PERFORMERS,
    venue: VENUE[0],
    overview: {
      audience: 47,
      performers: 20,
      groups: 8,
    },
    timeTable: [
      {
        id: 1,
        startTime: "2023-10-13T17:00:00",
        endTime: "2023-10-13T17:30:00",
        performer: PERFORMERS[0],
        program: [
          {
            title: "LOVE YOU ONLY",
          },
        ],
      },
      {
        id: 2,
        startTime: "2023-10-13T00:00:00",
        endTime: "2023-10-13T00:00:00",
        performer: PERFORMERS[1],
        program: [
          {
            title: "高嶺の花子さん / back number",
          },
          {
            title: "怪獣の花唄",
          },
        ],
      },
    ],
  },
  // {
  //   id: 2,
  //   times: 2,
  //   status: "finished",
  //   title: "Festival 2",
  //   eventDate: "2023-10-13T00:00:00",
  //   performers: PERFORMERS,
  //   venue: VENUE[1],
  //   overview: {
  //     audience: 80,
  //     performers: 20,
  //     groups: 8,
  //   },
  // },
  // {
  //   id: 3,
  //   times: 3,
  //   status: "upcoming",
  //   title: "Festival 3",
  //   eventDate: "2023-10-13T00:00:00",
  //   performers: PERFORMERS,
  //   venue: VENUE[1],
  //   overview: {
  //     audience: 80,
  //     performers: 20,
  //     groups: 8,
  //   },
  // },
] as const;

export type Festival = (typeof FESTIVALS)[number];

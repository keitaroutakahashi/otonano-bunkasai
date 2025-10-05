import { FESTIVALS } from "@/data/festivals";

export const getFestivals = () => {
  return FESTIVALS;
};

export const getFestival = (id: number) => {
  return FESTIVALS.find((festival) => festival.id === id);
};

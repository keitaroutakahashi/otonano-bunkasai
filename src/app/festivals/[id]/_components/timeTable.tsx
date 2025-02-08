import { TimeTableItem } from "./timeTableItem";
import { Title } from "./title";

const content = [
  {
    time: "20:15 - 22:10",
    artist: "Official 髭 oyaji",
    song: "LOVE YOU ONLY",
  },
  {
    time: "20:15 - 22:20",
    artist: "Official 髭 oyaji",
    song: "LOVE YOU ONLY",
  },
  {
    time: "20:12 - 22:10",
    artist: "Official 髭 oyaji",
    song: "LOVE YOU ONLY",
  },
  {
    time: "20:22 - 22:20",
    artist: "Official 髭 oyaji",
    song: "LOVE YOU ONLY",
  },
];

export const TimeTable = () => {
  return (
    <section>
      <Title title="TIME TABLE" />
      <div className="mt-20" />
      <div className="text-white flex justify-center">
        <div className="relative w-full px-5 md:w-[700px]">
          <div className="absolute border border-r left-1/2 -translate-x-1/2 h-full border-slate-700" />
          <div className="flex flex-col gap-8 md:gap-16">
            {content.map((item, i) => (
              <TimeTableItem key={item.time} isOdd={i % 2 === 1} {...item} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

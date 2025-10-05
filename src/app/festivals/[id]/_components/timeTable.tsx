import { format } from "@formkit/tempo";
import type { FC } from "react";
import { TimeTableItem } from "@/app/festivals/[id]/_components/timeTableItem";
import { Title } from "@/app/festivals/[id]/_components/title";
import type { Festival } from "@/data/festivals";

type Props = {
  festival: Festival;
};

export const TimeTable: FC<Props> = ({ festival }) => {
  const createTime = (item: (typeof festival.timeTable)[number]) => {
    if (!item.endTime) {
      return `${format(item.startTime, "HH:mm")}`;
    }
    return `${format(item.startTime, "HH:mm")} - ${format(item.endTime, "HH:mm")}`;
  };

  return (
    <section>
      <Title title="TIME TABLE" />
      <div className="mt-20" />
      <div className="text-white flex justify-center">
        <div className="relative w-full md:w-[700px]">
          <div className="absolute border border-r left-1/2 -translate-x-1/2 h-full border-slate-700" />
          <div className="flex flex-col gap-8 md:gap-16">
            {festival.timeTable.map((item, i) => (
              <TimeTableItem
                key={item.id}
                isOdd={i % 2 === 1}
                time={createTime(item)}
                title={item.title}
                program={item.program}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

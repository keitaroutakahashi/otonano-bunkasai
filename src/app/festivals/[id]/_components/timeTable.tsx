import type { Festival } from "@/data/festivals";
import { format } from "@formkit/tempo";
import type { FC } from "react";
import { TimeTableItem } from "./timeTableItem";
import { Title } from "./title";

type Props = {
  festival: Festival;
};

export const TimeTable: FC<Props> = ({ festival }) => {
  return (
    <section>
      <Title title="TIME TABLE" />
      <div className="mt-20" />
      <div className="text-white flex justify-center">
        <div className="relative w-full px-5 md:w-[700px]">
          <div className="absolute border border-r left-1/2 -translate-x-1/2 h-full border-slate-700" />
          <div className="flex flex-col gap-8 md:gap-16">
            {festival.timeTable.map((item, i) => (
              <TimeTableItem
                key={item.id}
                isOdd={i % 2 === 1}
                time={`${format(item.startTime, "HH:mm")} - ${format(item.endTime, "HH:mm")}`}
                performerName={item.performer.name}
                program={item.program}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

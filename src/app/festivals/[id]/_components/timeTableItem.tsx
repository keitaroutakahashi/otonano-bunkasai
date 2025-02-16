import type { Festival } from "@/data/festivals";
import { twMerge } from "tailwind-merge";

type Props = {
  isOdd: boolean;
  time: string;
  performerName: string;
  program: Festival["timeTable"][number]["program"];
};

export const TimeTableItem: React.FC<Props> = ({
  isOdd,
  time,
  performerName,
  program,
}) => {
  return (
    <div
      className={twMerge(
        "w-1/2 relative",
        !isOdd && "text-right pr-6 md:pr-10",
        isOdd && "self-end pl-6 md:pl-10",
      )}
    >
      <div
        className={twMerge(
          "absolute -right-1.5 top-0 size-3",
          isOdd && "-left-1.5",
        )}
      >
        <span className="absolute block rounded-full size-3 bg-primary animate-ping" />
        <span className="block rounded-full size-3 bg-primary" />
      </div>
      <p className="text-xs font-bold text-secondary">{time}</p>
      <div className="mt-2" />
      <p className="font-bold text-lg md:text-2xl">{performerName}</p>
      <div className="mt-2">
        {program.map((item) => (
          <p key={item.title} className="text-xs md:text-sm text-slate-500">
            {item.title}
          </p>
        ))}
      </div>
    </div>
  );
};

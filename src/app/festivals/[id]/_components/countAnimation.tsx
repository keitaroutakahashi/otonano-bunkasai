"use client";

import { useId } from "react";
import { useCountUp } from "react-countup";

type Props = {
  count: number;
};

export const CountAnimation: React.FC<Props> = ({ count }) => {
  const uniqueId = useId();

  useCountUp({
    ref: uniqueId,
    start: 0,
    end: count,
    enableScrollSpy: true,
    scrollSpyDelay: 200,
    scrollSpyOnce: true,
  });

  return (
    <p id={uniqueId} className="text-tertiary font-bold md:text-6xl text-4xl" />
  );
};

import type React from "react";

type Props = {
  content: React.ReactNode;
  icon: React.ReactNode;
};

const InfoCircle: React.FC<Props> = ({ content, icon }) => {
  return (
    <div className="gradient-rounded-border text-white p-5 rounded-full size-36 md:size-48 flex justify-center items-center flex-col">
      <div>{icon}</div>
      <div className="md:mt-5 mt-3" />
      {content}
    </div>
  );
};

export default InfoCircle;

type Props = {
  title: string;
};

export const Title: React.FC<Props> = ({ title }) => {
  return (
    <h2 className="text-white text-center md:text-4xl text-3xl font-bold tracking-widest">
      {title}
    </h2>
  );
};

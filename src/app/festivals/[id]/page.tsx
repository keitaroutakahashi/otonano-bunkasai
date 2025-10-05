import { Index } from "@/app/festivals/[id]/_components";
import { getFestival, getFestivals } from "@/features/festivals/api/api";

export async function generateStaticParams() {
  const festivals = getFestivals();

  return festivals.map((festival) => ({
    id: festival.id.toString(),
  }));
}

export default async function Page({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const id = (await params).id;
  const festival = getFestival(Number(id));

  if (!festival) {
    return { notFound: true };
  }

  return <Index festival={festival} />;
}

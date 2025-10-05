import { Index } from "@/app/festivals/[id]/_components";
import { getFestival, getFestivals } from "@/features/festivals/api/api";
import { notFound } from "next/navigation";

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
  const { id } = await params;
  const festival = getFestival(Number(id));

  if (!festival) {
    notFound();
  }

  return <Index festival={festival} />;
}

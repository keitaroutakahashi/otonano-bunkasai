import type { Metadata, ResolvingMetadata } from "next";
import { notFound } from "next/navigation";
import { Index } from "@/app/festivals/[id]/_components";
import { getFestival, getFestivals } from "@/features/festivals/api/api";

type Props = {
  params: Promise<{ id: string }>;
};

export async function generateMetadata(
  { params }: Props,
  _parent: ResolvingMetadata,
): Promise<Metadata> {
  const { id } = await params;
  const festivals = getFestivals();
  const festival = festivals.find((festival) => festival.id === Number(id));

  return {
    title: `${festival?.titleJa} | 大人の文化祭`,
  };
}

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

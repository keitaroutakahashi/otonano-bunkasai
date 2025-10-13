import type { Metadata } from "next";
import "@/app/globals.css";
import { Header } from "@/components/ui/header/header";

export const metadata: Metadata = {
  title: "大人の文化祭",
};

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Header />
      {children}
    </>
  );
}

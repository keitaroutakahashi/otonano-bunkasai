import type { Metadata } from "next";
import { Roboto_Mono } from "next/font/google";
import "@/app/globals.css";

const roboto = Roboto_Mono({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-roboto",
});

export const metadata: Metadata = {
  title: "大人の文化祭",
  description:
    "心を揺さぶる音楽と美酒に酔う 「大人の文化祭」。華やかに輝く仲間のステージが特別な夜を彩ります。お酒を片手に、音楽に身を委ね、日常を忘れる贅沢なひとときを過ごしませんか？仲間と笑い合い、胸が熱くなる瞬間を共有できるのは、大人だからこそ。音楽とお酒が織りなす特別な文化祭を、ぜひお楽しみください。",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body className={`${roboto.variable}  antialiased font-roboto`}>
        {children}
      </body>
    </html>
  );
}

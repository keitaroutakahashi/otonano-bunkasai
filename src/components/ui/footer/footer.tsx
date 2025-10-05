import Image from "next/image";
import Link from "next/link";
import { FooterNav } from "@/components/ui/footerNav/footerNav";

export const Footer = () => {
  return (
    <footer className="bg-black">
      <div className="max-w-5xl mx-auto p-8">
        <div className="pb-10 grid md:grid-cols-4 gap-12">
          <div className="">
            <p className="text-white text-sm font-bold">サイトマップ</p>
            <div className="mt-4" />
            <FooterNav list={[{ name: "トップ", href: "/" }]} />
          </div>
          <div className="">
            <p className="text-white text-sm font-bold">文化祭</p>
            <div className="mt-4" />
            <FooterNav
              list={[
                { name: "第1回大人の文化祭", href: "/festivals/1" },
                { name: "第2回大人の文化祭", href: "/festivals/2" },
                { name: "第3回大人の文化祭", href: "/festivals/3" },
              ]}
            />
          </div>
        </div>
        <div className="border-t border-gray" />
        <div className="pt-5 flex justify-between">
          <p className="text-gray text-xs text-center">©️ 大人の文化祭</p>
          <div className="">
            <Link href="/">
              <Image
                src="/images/sns/instagram.svg"
                alt="instagram"
                width={20}
                height={20}
              />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

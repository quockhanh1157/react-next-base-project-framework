import { Inter } from "next/font/google";
import { ReactNode } from "react";
import HeaderLayout from "@/components/HeaderLayout";
import FooterLayout from "@/components/FooterLayout";
import { Metadata } from "next";
import "@/styles/globals.css";

const inter = Inter({ subsets: ["latin"] });

type Props = {
  children: ReactNode;
};

export async function generateMetadata({}): Promise<Metadata> {
  return {
    title: "",
    description: "Description default",
    openGraph: {
      images: [""],
    },
  };
}

export default async function LocaleLayout({ children }: Props) {
  return (
    <html lang="en" suppressHydrationWarning={true}>
      <body className="m-auto">
        <HeaderLayout />
        <div className={"mx-auto w-full max-w-6xl"}>{children}</div>
        <FooterLayout />
      </body>
    </html>
  );
}

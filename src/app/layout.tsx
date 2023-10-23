import { Inter } from "next/font/google";
import { ReactNode } from "react";
import HeaderLayout from "@/components/HeaderLayout";
import FooterLayout from "@/components/FooterLayout";
import { createClient } from "@/prismicio";
import { Metadata } from "next";
import "@/styles/globals.css";

const inter = Inter({ subsets: ["latin"] });

type Props = {
  children: ReactNode;
};

export async function generateMetadata({}): Promise<Metadata> {
  const client = createClient();

  const settings = await client.getSingle("settings");
  return {
    metadataBase: new URL("http://localhost:3000"),
    title: settings.data.site_title,
    description: settings.data.meta_description || "Description default",
    openGraph: {
      images: [settings.data.og_image.url || ""],
    },
  };
}

export default async function LocaleLayout({ children }: Props) {
  return (
    <html lang="en" suppressHydrationWarning={true}>
      <body className="m-auto">
        <HeaderLayout />
        <div className={"mx-auto w-full max-w-6xl min-h-screen"}>{children}</div>
        <FooterLayout />
      </body>
    </html>
  );
}

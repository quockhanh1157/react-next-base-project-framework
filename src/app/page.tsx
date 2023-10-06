import { Metadata } from "next";
import { SliceZone } from "@prismicio/react";

import { createClient } from "@/prismicio";
import clsx from "clsx";
import React from "react";

export default async function Page() {
  return (
    <div className={clsx("px-4 py-10 mobile:py-14 mobile:px-6 tablet:py-16")}>
      <div className="mx-auto w-full max-w-6xl">Home</div>
    </div>
  );
}

export async function generateMetadata(): Promise<Metadata> {
  const client = createClient();
  const page = await client.getSingle("homepage");

  return {
    title: page.data.meta_title || "",
    description: page.data.meta_description || "",
  };
}

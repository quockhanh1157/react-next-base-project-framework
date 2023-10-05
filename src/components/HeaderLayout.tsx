import React from "react";
import { createClient } from "@/prismicio";
import Bounded from "@/components/Bounded";
import Link from "next/link";
import { PrismicNextLink } from "@prismicio/next";

const HeaderLayout = async () => {
  const client = createClient();

  const settings = await client.getSingle("settings");

  console.log(settings.data.navigation);
  return (
    <Bounded as={"header"} className={"py-4 mobile:py-6 tablet:py-8"}>
      <div
        className={
          "flex gap-4 items-center justify-between flex-row mobile:flex-col"
        }
      >
        <Link href={"/"}>{settings.data.site_title}</Link>
        <nav>
          <ul className="flex">
            {settings.data.navigation.map(({ link, label }) => (
              <li key={label} className={" p-3"}>
                <PrismicNextLink field={link}>{label}</PrismicNextLink>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </Bounded>
  );
};

export default HeaderLayout;

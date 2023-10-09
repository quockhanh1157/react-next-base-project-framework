import React from "react";
import { createClient } from "@/prismicio";
import Bounded from "@/components/Bounded";
import Link from "next/link";
import { PrismicNextLink } from "@prismicio/next";

const HeaderLayout = async () => {
  const settings = ["feature", "about"];

  return (
    <Bounded as={"header"} className={"py-4 mobile:py-6 tablet:py-8"}>
      <div
        className={
          "flex gap-4 items-center justify-between flex-row mobile:flex-col"
        }
      >
        <Link href={"/"}>Home</Link>
        <nav>
          <ul className="flex">
            {settings.map((i) => (
              <li className={"mr-3"} key={i}>
                <Link href={`/${i}`}>{i}</Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </Bounded>
  );
};

export default HeaderLayout;

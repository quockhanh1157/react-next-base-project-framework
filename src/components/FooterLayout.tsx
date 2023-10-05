import React from "react";
import styles from "@/styles/layout.module.scss";
import Bounded from "@/components/Bounded";
const FooterLayout = () => {
  return (
    <Bounded as={"footer"}>
      <div className="flex flex-row mobile:flex-col justify-between items-center gap-6">
        <div></div>
        <p className="text-xs">&copy; {new Date().getFullYear()}</p>
        <div></div>
      </div>
    </Bounded>
  );
};

export default FooterLayout;

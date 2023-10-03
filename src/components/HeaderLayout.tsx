"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { useLocale } from "next-intl";
import styles from "@/styles/layout.module.scss";
import { createClient } from "@/prismicio";
import NavBar from "@/components/NavBar";
import LocaleSwitcher from "@/components/LocaleSwitcher";

const HeaderLayout = () => {
  const locale = useLocale();
  const [settings, setSettings] = useState<any>();

  const client = createClient();
  useEffect(() => {
    client
      .getSingle("settings")
      .then((res) => setSettings(res))
      .catch();
  }, []);

  return (
    <header className={styles.header}>
      <div className={`${styles.header_container} ${styles.container}`}>
        <div>
          <label>
            <Link href={`/${locale}`}>
              {/*<Image className={styles.header_icon} width={50} height={50} src={'/icon-react.png'} alt={'icon'}/>*/}
              {settings ? settings.data.site_title : "Data Mau"}
            </Link>
          </label>

          <input className={styles.header_input} type={`checkbox`} id={"box"} />
          <nav className={styles.header_nav}>
            <ul>
              {settings && <NavBar navigation={settings.data.navigation} />}
            </ul>
          </nav>
        </div>
        <div>
          <div>
            <label className={styles.header_box} htmlFor={"box"}>
              <hr />
              <hr />
              <hr />
            </label>
          </div>
          <LocaleSwitcher />
        </div>
      </div>
    </header>
  );
};

export default HeaderLayout;

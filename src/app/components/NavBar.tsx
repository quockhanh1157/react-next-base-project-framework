import styles from "@/app/styles/layout.module.scss";
import Link from "next/link";
import React from "react";
import {usePathname} from "next/navigation";
import {useLocale} from "use-intl";
import LocaleSwitcher from "@/app/components/LocalceSwitcher";

const NavBar = () => {
  const pathname = usePathname()
  const locale = useLocale()
  return (
    <nav className={styles.header_nav}>
      <ul>
        <li><Link className={pathname == `/${locale}/facebook` ? styles.active : ""} href={`/${locale}/facebook`}>Facebook</Link>
        </li>
        <li><Link className={pathname == `/${locale}/tiktok` ? styles.active : ""} href={`/${locale}/tiktok`}>Tiktok</Link></li>
        <li><Link className={pathname == `/${locale}/speak` ? styles.active : ""} href={`/${locale}/speak`}>Speak</Link></li>
        <li><Link className={pathname == `/${locale}/client` ? styles.active : ""} href={`/${locale}/client`}>Client</Link></li>
        <li><Link className={pathname == `/${locale}/server` ? styles.active : ""} href={`/${locale}/server`}>Server</Link></li>
        <li><Link className={pathname == `/${locale}/test-found` ? styles.active : ""} href={`/${locale}/test-found`}>Test Found</Link></li>
        <LocaleSwitcher/>
      </ul>
    </nav>
  )
}

export default NavBar
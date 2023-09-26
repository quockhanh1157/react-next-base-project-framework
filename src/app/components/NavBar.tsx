import styles from "@/app/styles/layout.module.scss";
import Link from "next/link";
import React from "react";
import {usePathname} from "next/navigation";

const NavBar = () => {
  const pathname = usePathname()
  return (
    <nav className={styles.header_nav}>
      <ul>
        <li><Link className={pathname == "/facebook" ? styles.active : ""} href={'/facebook'}>Facebook</Link>
        </li>
        <li><Link className={pathname == "/tiktok" ? styles.active : ""} href={'/tiktok'}>Tiktok</Link></li>
        <li><Link className={pathname == "/speak" ? styles.active : ""} href={'/speak'}>Speak</Link></li>
        <li><Link className={pathname == "/client" ? styles.active : ""} href={'/client'}>Client</Link></li>
        <li><Link className={pathname == "/server" ? styles.active : ""} href={'/server'}>Server</Link></li>
        <li><Link className={pathname == "/test-found" ? styles.active : ""} href={'/test-found'}>Test Found</Link></li>
      </ul>
    </nav>
  )
}

export default NavBar
'use client'
import React from 'react';
import styles from '@/styles/layout.module.scss'
import Link from "next/link";
import {usePathname} from "next/navigation";
import Image from "next/image";

const HeaderLayout = () => {
  const pathname = usePathname()

  return (
    <header className={styles.header}>
      <div className={`${styles.header_container} ${styles.container}`}>
        <div>
          <label><Link href={'/'}>
            <Image className={styles.header_icon} width={50} height={50} src={'/icon-react.png'} alt={'icon'}/>
          </Link></label>

          <input className={styles.header_input} type={"checkbox"} id={'box'}/>
          <nav className={styles.header_nav}>
            <ul>
              <li><Link className={pathname == "/facebook" ? styles.active : ""} href={'/facebook'}>Facebook</Link>
              </li>
              <li><Link className={pathname == "/tiktok" ? styles.active : ""} href={'/tiktok'}>Tiktok</Link></li>
              <li><Link className={pathname == "/speak" ? styles.active : ""} href={'/speak'}>Speak</Link></li>
              <li><Link className={pathname == "/test-found" ? styles.active : ""} href={'/test-found'}>Test Found</Link></li>
            </ul>
          </nav>
        </div>
        <div>
          <label className={styles.header_box} htmlFor={'box'}>
            <hr/>
            <hr/>
            <hr/>
          </label>
        </div>
      </div>
    </header>
  );
};

export default HeaderLayout;

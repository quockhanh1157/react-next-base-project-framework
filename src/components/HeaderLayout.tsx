'use client'
import React from 'react';
import Link from "next/link";
import {usePathname} from "next/navigation";
import Image from "next/image";
import LocaleSwitcher from "@/components/LocaleSwitcher";
import {useLocale} from "next-intl";
import styles from '@/styles/layout.module.scss'

const HeaderLayout = () => {
  const pathname = usePathname()
  const locale = useLocale()

  return (
    <header className={styles.header}>
      <div className={`${styles.header_container} ${styles.container}`}>
        <div>
          <label><Link href={'/'}>
            <Image className={styles.header_icon} width={50} height={50} src={'/icon-react.png'} alt={'icon'}/>
          </Link></label>

          <input className={styles.header_input} type={`checkbox`} id={'box'}/>
          <nav className={styles.header_nav}>
            <ul>
              <li><Link className={pathname == `/${locale}/facebook` ? styles.active : ``} href={`/${locale}/facebook`}>Facebook</Link>
              </li>
              <li><Link className={pathname == `/${locale}/tiktok` ? styles.active : ``} href={`/${locale}/tiktok`}>Tiktok</Link></li>
              <li><Link className={pathname == `/${locale}/speak` ? styles.active : ``} href={`/${locale}/speak`}>Speak</Link></li>
              <li><Link className={pathname == `/${locale}/test-found` ? styles.active : ``} href={`/${locale}/test-found`}>Test Found</Link></li>
              <LocaleSwitcher/>
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

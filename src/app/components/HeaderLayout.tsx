'use client'
import React from 'react';
import styles from '@/app/styles/layout.module.scss'
import Link from "next/link";
import {usePathname} from "next/navigation";
import Image from "next/image";
import NavBar from "@/app/components/NavBar";

const HeaderLayout = () => {

  return (
    <header className={styles.header}>
      <div className={`${styles.header_container} ${styles.container}`}>
        <div>
          <label><Link href={'/'}>
            <Image className={styles.header_icon} width={50} height={50} src={'/icon-react.png'} alt={'icon'}/>
          </Link></label>

          <input className={styles.header_input} type={"checkbox"} id={'box'}/>
          <NavBar/>
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
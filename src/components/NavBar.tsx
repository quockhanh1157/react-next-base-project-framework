import React from "react";
import Link from "next/link";
import {usePathname} from "next-intl/client";
import styles from '@/styles/layout.module.scss'
import {useLocale} from "next-intl";
import {navLink} from "@/types/NavBar";


type Props = {
  navigation: navLink[]
}

const NavBar = (props: Props) => {
  const {navigation} = props
  const locale = useLocale()
  const pathname = usePathname()

  return (
    <>
      {navigation.map(({label, endpoint}: { label: string, endpoint: string }) => (
        <li key={label}>
          <Link className={endpoint === `/${locale}${pathname}` ? styles.active : ""} href={endpoint}>{label}</Link>
        </li>
      ))}
    </>
  )
}

export default NavBar
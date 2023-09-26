'use client'
import styles from '../../styles/page.module.css';
import {useTranslations} from "next-intl";

export default function IndexPage() {
  const t = useTranslations('Index')
  return (
    <main className={styles.main}>
      {t('title')}
    </main>
  );
}

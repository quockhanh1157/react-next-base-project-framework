'use client'
import {useTranslations} from "next-intl";

export default function IndexPage() {
  const t = useTranslations('Index')
  return (
    <main>
      {t('title')}
    </main>
  );
}

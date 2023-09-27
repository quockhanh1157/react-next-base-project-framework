import {Inter} from 'next/font/google';
import {notFound} from 'next/navigation';
import {createTranslator, NextIntlClientProvider} from 'next-intl';
import {ReactNode} from 'react';
import HeaderLayout from "@/components/HeaderLayout";
import FooterLayout from "@/components/FooterLayout";
import styles from '@/styles/layout.module.scss'
import {createClient} from "@/prismicio";
import {Metadata} from "next";

const inter = Inter({subsets: ['latin']});

type Props = {
  children: ReactNode;
  params: { locale: string };
};

async function getMessages(locale: string) {
  try {
    return (await import(`../../../messages/${locale}.json`)).default;
  } catch (error) {
    notFound();
  }
}

export async function generateMetadata({params: {locale}}: Props): Promise<Metadata> {

  const client = createClient()

  const page = await client.getSingle("settings")



  const messages = await getMessages(locale);
  const t = createTranslator({locale, messages});
  return {
    title: page?.data.site_title || t('LocaleLayout.title'),
    description:page?.data.meta_description || "Description default",
    openGraph: {
      images: [page?.data.og_image.url || ""],
    },
  }
}

export default async function LocaleLayout({
  children,
  params: {locale}
}: Props) {
  const messages = await getMessages(locale);

  return (
    <html lang={locale} suppressHydrationWarning={true}>
      <body style={{margin: 0}}>
        <NextIntlClientProvider locale={locale} messages={messages}>
          <HeaderLayout/>
          <div className={styles.container}>
            {children}
          </div>
          <FooterLayout/>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
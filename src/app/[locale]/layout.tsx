import {Inter} from 'next/font/google';
import {notFound} from 'next/navigation';
import {createTranslator, NextIntlClientProvider} from 'next-intl';
import {ReactNode} from 'react';
import HeaderLayout from "@/app/components/HeaderLayout";
import FooterLayout from "@/app/components/FooterLayout";
import styles from '@/app/styles/layout.module.scss'
import AuthProvider from "@/app/context/AuthProvider";

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

export async function generateStaticParams() {
  return ['en', 'vi'].map((locale) => ({locale}));
}

export async function generateMetadata({params: {locale}}: Props) {
  const messages = await getMessages(locale);

  // You can use the core (non-React) APIs when you have to use next-intl
  // outside of components. Potentially this will be simplified in the future
  // (see https://next-intl-docs.vercel.app/docs/next-13/server-components).
  const t = createTranslator({locale, messages});

  return {
    title: t('LocaleLayout.title')
  };
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
          <AuthProvider>
            <HeaderLayout/>
            <div className={styles.container}>
              {children}
            </div>
            <FooterLayout/>
          </AuthProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
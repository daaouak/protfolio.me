import { Layout } from '@/components';
import '@/styles/styles.css';
import { ThemeProvider } from 'next-themes';
import type { AppProps } from 'next/app';
import Head from 'next/head';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider attribute='class'>
      <Head>
        <link rel='icon' href='/me.ico' className='rounded-full' />
        <link rel='preconnect' href='https://fonts.googleapis.com' />
        <link rel='preconnect' href='https://fonts.gstatic.com' />
        <link
          href='https://fonts.googleapis.com/css2?family=Poppins:wght@200;300;500;600;700&display=swap'
          rel='stylesheet'
        />
        <title>AbdessamadPas</title>
        <meta
          name='description'
          content='Shonjmoj is a full stack developer based in Morocco'
        />
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  );
}

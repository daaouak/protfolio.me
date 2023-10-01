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
          content='AbdessamadPas is a full stack developer based in Morocco.'
        />
        <meta name='author' content='AbdessamadPas' />
        <meta name='keywords' content='AbdessamadPas, Abdessamad, Pas, aalouwan, Aalouwan, abdessamadAalouwan,abdessamadpas.tech' />
        <meta name='theme-color' content='#ffffff' />
        <meta name='twitter:card' content='summary' />
        <meta name='twitter:site' content='@AbdessamadPas' />
        <meta name='twitter:creator' content='@AbdessamadPas' />
        <meta name='twitter:title' content='AbdessamadPas' />
        <meta
          name='twitter:description'
          content='AbdessamadPas is a full stack developer based in Morocco.'
        />
        <meta name='twitter:image' content='/me.png' />
        <meta property='og:title' content='AbdessamadPas' />
        <meta
          property='og:description'
          content='AbdessamadPas is a full stack developer based in Morocco.'
        />
        <meta property='og:image' content='/me.png' />
        <meta property='og:url' content='https://abdessamadpas.tech' />
        <meta property='og:site_name' content='AbdessamadPas' />
        <meta property='og:locale' content='en_US' />
        <meta property='og:type' content='website' />
        <meta property='og:author' content='AbdessamadPas' />
        <meta property='og:published_time' content='2023-08-15' />
        <meta property='og:modified_time' content='2023-08-15' />
        <meta property='og:section' content='Technology' />
        <meta property='og:tag' content='Technology' />
        <meta property='fb:app_id' content='AbdessamadPas' />
        <meta property='fb:profile_id' content='AbdessamadPas' />
        <meta property='fb:author' content='AbdessamadPas' />
        <meta property='fb:page_id' content='AbdessamadPas' />
        <meta property='fb:admins' content='AbdessamadPas' />
        <meta property='fb:publish_date' content='2023-08-15' />
        <meta property='fb:modified_date' content='2023-08-15' />
        <meta property='fb:section' content='Technology' />
        <meta property='fb:tag' content='Technology' />
        <meta property='article:author' content='AbdessamadPas' />
        <meta property='article:publisher' content='AbdessamadPas' />
        <meta property='article:published_time' content='2023-08-15' />
        <meta property='article:modified_time' content='2023-08-15' />
        <meta property='article:section' content='Technology' />
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  );
}

import Head from 'next/head'
import '../styles/globals.css'
import { ThemeProvider } from 'next-themes'
function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Bishoe`s Portfolio</title>
        <meta name="description" content="매일 코딩연습" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <ThemeProvider attribute='class'>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  )
}

export default MyApp

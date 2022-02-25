import '../styles/globals.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import type { AppProps } from 'next/app'
import Head from 'next/head';
function MyApp({ Component, pageProps }: AppProps) {
  return(
  <>
    <Head>
      <script src="https://kit.fontawesome.com/0bad2c8be1.js" crossOrigin="anonymous"></script>
    </Head>
    <Component {...pageProps} />
  </>
  
}

export default MyApp

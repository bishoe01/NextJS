import Layout from '../components/Layout';
import NavBar from '../components/NavBar'
import Head from 'next/head';
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <>
  <Layout>
    
  <Component {...pageProps} />
  </Layout>
  </>
  );
}

export default MyApp

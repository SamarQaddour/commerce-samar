import Head from "next/head";
import Script from "next/script";
import "bootstrap/dist/css/bootstrap.css";
import { useEffect } from "react";
import { SessionProvider } from "next-auth/react";
import "../styles/Forminput.css";
import "../styles/Navbar.css";
import '../styles/globals.css';
import '../styles/catgories.css'
import Layout from "../components/Layout";

function MyApp({ Component, pageProps, session }) {
  ;({
    Component,
    pageProps: { session, ...pageProps }
  })

  useEffect(() => {
    import("bootstrap/dist/js/bootstrap")
  }, [])
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Script
        src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-ygbV9kiqUc6oa4msXn9868pTtWMgiQaeYH7/t7LECLbyPA2x65Kgf80OJFdroafW"
        crossOrigin="anonymous"/>


        <Layout>
            <Component {...pageProps} />
        </Layout>

    </>
  )
}


export default MyApp

import Head from "next/head";
import { Favicons } from "../components";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <Favicons />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;

import Head from "next/head";
import { Favicons } from "../components";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,800;1,800&display=swap"
          rel="stylesheet"
        />
        <Favicons />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;

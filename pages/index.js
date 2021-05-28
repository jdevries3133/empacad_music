import Head from "next/head";

import { Header, InstrumentDriveProgress } from "../components";

export default function Home() {
  return (
    <>
      <Head>
        <title>Empowerment Academy Music</title>
        <meta
          name="description"
          content={
            "Learn about and support the music program at Empowerment Academy " +
            "Public Charter School!"
          }
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <InstrumentDriveProgress />
    </>
  );
}

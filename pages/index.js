import Head from "next/head";
import Image from "next/image";
import styles from "../styles/home.module.css";

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

      <header>
        <h1>Empowerment Academy</h1>
        <Image
          className={styles.logo}
          src="/logo.jpg"
          alt="EMPACAD Music Logo"
          width={300}
          height={300}
        />
      </header>
      <article id="instrument_drive_targets">
        <h2>Music Instrument Drive</h2>
        <h3>Flute</h3>
        <div className={styles.progressbar}>
          <div
            style={{ width: "30%" }}
            className={styles.progressbar__value}
          ></div>
          <progress value="70" max="100">
            100%
          </progress>
        </div>
        <h3>Clarinet</h3>
        <div className={styles.progressbar}>
          <div
            style={{ width: "30%" }}
            className={styles.Progressbar__value}
          ></div>
          <progress value="70" max="100">
            100%
          </progress>
        </div>
        <h3>Trumpet</h3>
        <div className={styles.progressbar}>
          <div
            style={{ width: "20%" }}
            className={styles.progressbar__value}
          ></div>
          <progress value="70" max="100">
            100%
          </progress>
        </div>
        <h3>Trombone</h3>
        <div className={styles.progressbar}>
          <div
            style={{ width: "80%" }}
            className={styles.progressbar__value}
          ></div>
          <progress value="70" max="100">
            100%
          </progress>
        </div>
      </article>
    </>
  );
}

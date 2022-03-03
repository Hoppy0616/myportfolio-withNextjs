import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import PageLink from "./components/pageLink";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>My portfolio</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.main}>
        <div className={styles.links}>
          <PageLink title="About" />
        </div>
        <div className={styles.links}>
          <PageLink title="Access" />
        </div>
        <h1>
          Hello,I'm <br />
          Hoppy!
        </h1>
        <div className={styles.links}>
          <PageLink title="Woorks" />
        </div>
        <div className={styles.links}>
          <PageLink title="hobby" />
        </div>
      </div>
    </div>
  );
};
export default Home;

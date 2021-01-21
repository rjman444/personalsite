import Head from "next/head";
import Link from "next/link";
import styles from "../styles/home.module.css";
import Layout from "../components/layout";

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>Ryan Jansen | Web Developer</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.container}>
        <div className={styles.header}>
          <h1>Hi, I'm Ryan & I'm a web developer.</h1>
        </div>
        <div className={styles.btnHolder}>
          <Link href="/work">
            <a className={styles.btn}>My Work</a>
          </Link>
          <Link href="/contact">
            <a className={styles.btn}>Contact Me</a>
          </Link>
        </div>
      </div>
    </Layout>
  );
}

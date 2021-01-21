import Head from "next/head";
import Link from "next/link";

import Layout from "../components/layout";

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>Ryan Jansen | Web Developer</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="homeContainer">
        <div className="header">
          <h1>Hi, I'm Ryan & I'm a web developer.</h1>
        </div>
        <div className="btnHolder">
          <Link href="/work">
            <a className="btn">My Work</a>
          </Link>
          <Link href="/contact">
            <a className="btn">Contact Me</a>
          </Link>
        </div>
      </div>
    </Layout>
  );
}

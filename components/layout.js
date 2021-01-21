import styles from "../styles/Layout.module.css";
import Link from "next/link";

export default function Layout({ children }) {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <div className={styles.logo}>
          <Link href="/">
            <a>Ryan Jansen</a>
          </Link>
        </div>
        <div className={styles.menu}>
          <Link href="/work" className={styles.link}>
            <a>Work</a>
          </Link>
          <Link href="/contact" className={styles.link}>
            <a>Contact</a>
          </Link>
        </div>
      </header>
      <main>{children}</main>
      <footer className={styles.footer}></footer>
    </div>
  );
}

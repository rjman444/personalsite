import Link from "next/link";

export default function Layout({ children }) {
  return (
    <div className="layoutContainer">
      <header className="layoutHeader">
        <div className="logo">
          <Link href="/">
            <a>Ryan Jansen</a>
          </Link>
        </div>
        <div className="menu">
          <Link href="/work" className="layoutLink">
            <a>Work</a>
          </Link>
          <Link href="/contact" className="layoutLink">
            <a>Contact</a>
          </Link>
        </div>
      </header>
      <main>{children}</main>
    </div>
  );
}

import Link from "next/link";
import Style from "./navBar.module.css";

export default function Navbar() {
  return (
    <nav className={Style.nav}>
      <Link className={Style.link} href="/">
        Home
      </Link>
      <Link className={Style.link} href="/users">
        Users
      </Link>
      <Link className={Style.link} href="/project">
        Project
      </Link>
      <Link className={Style.link} href="/contact">
        Contact
      </Link>
    </nav>
  );
}

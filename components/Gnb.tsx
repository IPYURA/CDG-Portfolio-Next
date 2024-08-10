"use client";

import { usePathname } from "next/navigation";
import styles from "../styles/header.module.scss";
import Link from "next/link";

const Gnb = () => {
  const path = usePathname();
  return (
    <nav className={styles.gnb}>
      <Link href={"/"} className={path === "/" ? styles.on : undefined}>
        Home
      </Link>
      <Link href={"/projects"} className={path.startsWith("/project") ? styles.on : undefined}>
        Projects
      </Link>
    </nav>
  );
};

export default Gnb;

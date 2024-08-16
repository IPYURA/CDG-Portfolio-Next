"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import styles from "@/styles/header.module.scss";

interface IProps {
  isOpen: boolean;
  onClickNav: () => void;
}

const MobileNav = ({ isOpen, onClickNav }: IProps) => {
  const path = usePathname();
  return (
    <nav
      className={`${styles.mobileNav} ${isOpen ? styles.active : undefined}`}
    >
      <Link
        href={"/"}
        className={path === "/" ? styles.on : undefined}
        onClick={onClickNav}
      >
        Home
      </Link>
      <Link
        href={"/projects"}
        className={path.startsWith("/project") ? styles.on : undefined}
        onClick={onClickNav}
      >
        Projects
      </Link>
    </nav>
  );
};

export default MobileNav;

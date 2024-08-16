import styles from "../styles/header.module.scss";
import Gnb from "./Gnb";
import DarkModeButton from "./DarkModeButton";
import Link from "next/link";
import MobileMenu from "./MobileMenu";

import MobileNav from "./MobileNav";
import Svg from "./Svg";
import IconMenu from "@/public/icons/icon-menu.svg";

const Header = () => {
  return (
    <header className={styles.header}>
      <h1 className={styles.logo}>
        <Link href={"/"}>CDG Portfolio</Link>
      </h1>
      <div className={styles.utilWrap}>
        <Gnb />
        <MobileMenu />
        <DarkModeButton />
      </div>
    </header>
  );
};

export default Header;

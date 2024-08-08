import styles from "../styles/header.module.scss";
import Gnb from "./Gnb";
import DarkModeButton from "./DarkModeButton";
import Link from "next/link";

const Header = () => {
  return (
    <header className={styles.header}>
      <h1>
        <Link href={"/"}>CDG Portfolio</Link>
      </h1>
      <div className={styles.utilWrap}>
        <Gnb />
        <DarkModeButton />
      </div>
    </header>
  );
};

export default Header;

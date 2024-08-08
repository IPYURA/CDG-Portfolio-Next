import styles from "../styles/header.module.scss";
import Link from "next/link";

const Gnb = () => {
    return (
        <nav className={styles.gnb}>
            <Link href={"/"}>Home</Link>
            <Link href={"/projects"}>Projects</Link>
        </nav>
    )
}

export default Gnb;
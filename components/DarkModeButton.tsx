"use client";

import styles from "../styles/header.module.scss";
import Image from "next/image";
import Icon_moon from "../public/images/icon-moon.svg"
import Icon_sun from "../public/images/icon-sun.svg"

const DarkModeButton = () => {
  return <div className={styles.darkModeBtn}>
    {/* <Image src={icon_sun} alt="icon_sun" width={22} height={22} id="icon_sun"/> */}
    <Icon_sun />
    <Icon_moon />
  </div>;
};

export default DarkModeButton;

"use client";

import { useState } from "react";
import styles from "../styles/header.module.scss";
import Image from "next/image";
import Icon_moon from "../public/images/icon-moon.svg";
import Icon_sun from "../public/images/icon-sun.svg";

const DarkModeButton = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const darkModeHandler = () => {
    setIsDarkMode(!isDarkMode);

    if (isDarkMode) {
      document.body.setAttribute("data-theme", "light");
    } else {
      document.body.setAttribute("data-theme", "dark");
    }
  };
  return (
    <div className={styles.darkModeBtn} onClick={darkModeHandler}>
      <Icon_sun />
      <Icon_moon />
      <div
        className={`${styles.circle} ${
          isDarkMode ? styles.dark : styles.light
        }`}
      ></div>
    </div>
  );
};

export default DarkModeButton;

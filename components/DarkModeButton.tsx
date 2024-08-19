"use client";

import { useState, useEffect } from "react";
import styles from "../styles/header.module.scss";
import Icon_moon from "../public/images/icon-moon.svg";
import Icon_sun from "../public/images/icon-sun.svg";
import Svg from "./Svg";

const DarkModeButton = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const makeDarkMode = () => {
    document.body.setAttribute("data-theme", "dark");
    localStorage.setItem("Dark/Light", "Dark");
    setIsDarkMode(true);
  };

  const makeLightMode = () => {
    document.body.setAttribute("data-theme", "light");
    localStorage.setItem("Dark/Light", "Light");
    setIsDarkMode(false);
  };

  const darkModeHandler = () => {
    if (isDarkMode) {
      makeLightMode();
    } else {
      makeDarkMode();
    }
  };

  useEffect(() => {
    const nowLocalStorage = localStorage.getItem("Dark/Light");
    if (nowLocalStorage === undefined || nowLocalStorage === null) {
      window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: dark)").matches
        ? makeDarkMode()
        : makeLightMode();
    } else {
      nowLocalStorage === "Dark" ? makeDarkMode() : makeLightMode();
    }
  }, []);

  return (
    <div className={styles.darkModeBtn} onClick={darkModeHandler}>
      <Svg width={22} height={22} color={"orange"}>
        <Icon_sun />
      </Svg>
      <Svg width={19} height={19} color={"#ffe454"}>
        <Icon_moon />
      </Svg>

      <div
        className={`${styles.circle} ${
          isDarkMode ? styles.dark : styles.light
        }`}
      ></div>
    </div>
  );
};

export default DarkModeButton;

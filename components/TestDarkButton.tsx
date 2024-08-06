"use client";

import styles from "../styles/home.module.scss";
import { useState } from "react";

const TestDartButton = () => {
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
    <button onClick={darkModeHandler} className={styles.modeBtn}>
      {isDarkMode ? "light-mode" : "dark-mode"}
    </button>
  );
};

export default TestDartButton;

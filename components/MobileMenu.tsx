"use client";

import { useState } from "react";
import styles from "../styles/header.module.scss";
import Svg from "./Svg";
import IconMenu from "@/public/icons/icon-menu.svg";
import IconClose from "@/public/icons/icon-close.svg";
import MobileNav from "./MobileNav";

const MobileMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const onClickNav = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <button onClick={onClickNav} className={styles.mobileMenu}>
        <Svg width={32} height={32} color={"white"}>
          {isOpen ? <IconClose /> : <IconMenu />}
        </Svg>
      </button>
      <MobileNav isOpen={isOpen} onClickNav={onClickNav} />
    </>
  );
};

export default MobileMenu;

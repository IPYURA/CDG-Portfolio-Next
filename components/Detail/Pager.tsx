"use client";

import styles from "@/styles/detail.module.scss";
import { StaticImageData } from "next/image";

interface IPagerProps {
  images: StaticImageData[];
  nowIndex: number;
  onClickPager: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

const Pager = ({ images, nowIndex, onClickPager }: IPagerProps) => {
  return (
    <div className={styles.pager}>
      {images.map((item, index) => (
        <button
          onClick={onClickPager}
          key={index}
          id={String(index)}
          className={`${styles.circle} ${
            nowIndex === index + 1 ? styles.active : undefined
          }`}
        ></button>
      ))}
    </div>
  );
};

export default Pager;

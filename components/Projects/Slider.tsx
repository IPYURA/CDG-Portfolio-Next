"use client";

import { useState, useEffect } from "react";
import styles from "@/styles/projects.module.scss";
import { StaticImageData } from "next/image";
import Slide from "./Slide";

const Slider = ({ images }: { images: StaticImageData[] }) => {
  const [nowIndex, setNowIndex] = useState(1);
  const [maxIndex, setMaxIndex] = useState<number>(images.length + 1);

  const checkLimit = () => {
    console.log(nowIndex);

    if (nowIndex > maxIndex - 1) {
      setNowIndex(1);
      console.log("1로 세팅");
    }
    if (nowIndex === 0) {
      setNowIndex(maxIndex - 1);
      console.log("maxIndex - 1로 세팅");
    }
  };

  useEffect(() => {
    checkLimit();
  }, [nowIndex]);

  return (
    <div className={styles.slider}>
      {images.length > 1 ? (
        <>
          <button
            onClick={() => setNowIndex(nowIndex - 1)}
            className={styles.prev}
          >
            이전
          </button>
          <button
            onClick={() => setNowIndex(nowIndex + 1)}
            className={styles.next}
          >
            다음
          </button>
        </>
      ) : undefined}

      <div
        className={styles.slideFrame}
        style={{
          width: `${100 * images.length + 200}%`,
          left: `${nowIndex * -100}%`,
        }}
      >
        <Slide image={images[images.length - 1]} />
        {images?.map((img, index) => (
          <Slide image={img} key={index} />
        ))}
        <Slide image={images[0]} />
      </div>
    </div>
  );
};

export default Slider;

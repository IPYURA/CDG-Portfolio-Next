"use client";

import { useState, useEffect } from "react";
import styles from "@/styles/projects.module.scss";
import { StaticImageData } from "next/image";
import Slide from "./Slide";

const Slider = ({ images }: { images: StaticImageData[] }) => {
  const [nowIndex, setNowIndex] = useState(0);
  const [slideArr, setSlideArr] = useState<StaticImageData[]>(images);

  const initArray = () => {
    const lastSlide = images[images.length - 1];
    const firstSlide = images[0];
    // images.unshift(lastSlide);
    // images.push(firstSlide);
    // setSlideArr((arr) => arr.push(lastSlide));
  };

  const moveNext = () => {
    setNowIndex(nowIndex + 1);
  };
  //   const checkLimit = (limit:number) => {

  //   }

  useEffect(() => {
    setSlideArr(images);
    initArray();
    // console.log("slideArr의 정체: ", slideArr);
  }, []);

  return (
    <div className={styles.slider}>
      <button className={styles.prev}>이전</button>
      <button onClick={moveNext} className={styles.next}>
        다음
      </button>
      <div
        className={styles.slideFrame}
        style={{
          width: `${100 * images.length}%`,
          left: `${nowIndex * -100}%`,
        }}
      >
        {images?.map((img, index) => (
          <Slide image={img} key={index} />
        ))}
      </div>
    </div>
  );
};

export default Slider;

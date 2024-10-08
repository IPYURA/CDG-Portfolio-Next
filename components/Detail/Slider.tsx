"use client";

import { useState, useEffect } from "react";
import styles from "@/styles/detail.module.scss";
import { StaticImageData } from "next/image";
import Slide from "../Detail/Slide";
import Pager from "../Detail/Pager";
import Svg from "../Svg";
import IconLeft from "@/public/icons/icon-left.svg";
import IconRight from "@/public/icons/icon-right.svg";

const Slider = ({ images }: { images: StaticImageData[] }) => {
  const [nowIndex, setNowIndex] = useState(1);
  const [maxIndex, setMaxIndex] = useState<number>(images.length + 1);
  const [isTransition, setIsTransition] = useState(true);
  const [isDisabled, setIsDisabled] = useState(false);

  const buttonDebounce = () => {
    setIsDisabled(true);
    setTimeout(() => {
      setIsDisabled(false);
    }, 450);
  };

  const moveNext = () => {
    buttonDebounce();
    setNowIndex(nowIndex + 1);
  };

  const movePrev = () => {
    buttonDebounce();
    setNowIndex(nowIndex - 1);
  };

  const checkLimit = () => {
    if (nowIndex === maxIndex) {
      setTimeout(() => {
        setIsTransition(false);
        setNowIndex(1);
      }, 300);
    }

    if (nowIndex === 0) {
      setTimeout(() => {
        setIsTransition(false);
        setNowIndex(maxIndex - 1);
      }, 300);
    }

    setTimeout(() => {
      setIsTransition(true);
    }, 20);
  };

  const onClickPager = (e: React.MouseEvent<HTMLButtonElement>) => {
    setNowIndex(Number(e.currentTarget.id) + 1);
  };

  useEffect(() => {
    checkLimit();
  }, [nowIndex]);

  return (
    <div className={styles.slider}>
      {images.length > 1 ? (
        <>
          <button
            onClick={movePrev}
            disabled={isDisabled}
            className={styles.prev}
          >
            <Svg width={18} height={27} color="#3e3e3e">
              <IconLeft />
            </Svg>
          </button>
          <button
            onClick={moveNext}
            disabled={isDisabled}
            className={styles.next}
          >
            <Svg width={18} height={27} color="#3e3e3e">
              <IconRight />
            </Svg>
          </button>
          <Pager
            images={images}
            nowIndex={nowIndex}
            onClickPager={onClickPager}
          />
        </>
      ) : undefined}

      <div
        className={styles.slideFrame}
        style={{
          width: `${100 * images.length + 200}%`,
          left: `${nowIndex * -100}%`,
          transition: `${isTransition ? "0.4s" : "none"}`,
        }}
      >
        <Slide image={images[images.length - 1]} priority={false} />
        {images?.map((img, index) => (
          <Slide
            image={img}
            key={index}
            priority={index === 1 ? true : false}
          />
        ))}
        <Slide image={images[0]} priority={false} />
      </div>
    </div>
  );
};

export default Slider;

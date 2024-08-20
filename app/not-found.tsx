import styles from "@/styles/not-found.module.scss";
import Image from "next/image";
import NotFoundImg from "@/public/images/404_image.png";
import { roboto } from "./font";

const Custom404 = () => {
  return (
    <>
      <div className={styles.notFoundBG}>
        <div className={styles.contentBox}>
          <Image src={NotFoundImg} alt="" />
          <h3 className={roboto.className}>Page Not Found.</h3>
          <h5>존재하지 않는 페이지입니다.</h5>
        </div>
      </div>
    </>
  );
};

export default Custom404;

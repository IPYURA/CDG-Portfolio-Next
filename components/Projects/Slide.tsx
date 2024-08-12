import { StaticImageData } from "next/image";
import Image from "next/image";
import styles from "@/styles/projects.module.scss";

const Slide = ({ image }: { image: StaticImageData }) => {
  return (
    <Image className={styles.slide} src={image} alt="img" />

    // <div className={styles.slide}>
    //   <Image src={image} alt="img" />
    // </div>
  );
};

export default Slide;

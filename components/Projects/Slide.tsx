import { StaticImageData } from "next/image";
import Image from "next/image";
import styles from "@/styles/projects.module.scss";

interface ISlideProps {
  image: StaticImageData;
  priority: boolean;
}

const Slide = ({ image, priority }: ISlideProps) => {
  return (
    <div className={styles.slide}>
      <Image src={image} alt="img" priority={priority} />
    </div>
  );
};

export default Slide;

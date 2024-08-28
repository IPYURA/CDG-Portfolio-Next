import Image from "next/image";
import { StaticImageData } from "next/image";
import styles from "@/styles/projects.module.scss";

interface ICard {
  title: string;
  stacks: string;
  description: string;
  image: StaticImageData;
}

const ProjectCard = ({ image, title, stacks, description }: ICard) => {
  return (
    <div className={styles.projectCard}>
      <div className={styles.imgWrap}>
        <Image src={image} alt="projectImg" placeholder="blur" />
      </div>

      <div className={styles.textArea}>
        <div className={styles.infoArea}>
          <h3 className={styles.title}>{title}</h3>
          <div className={styles.stacks}>{stacks}</div>
        </div>
        <div className={styles.desc}>{description}</div>
      </div>
    </div>
  );
};

export default ProjectCard;

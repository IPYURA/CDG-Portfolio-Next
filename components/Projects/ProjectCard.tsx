import styles from "@/styles/projects.module.scss";
import Image from "next/image";
import mockImg from "../../public/images/mock/banksalad.jpg";

const ProjectCard = () => {
  return (
    <div className={styles.projectCard}>
      <Image src={mockImg} alt="projectImg"/>
      <div className={styles.desc}>
        <h3>제목<div className={styles.stacks}>#React</div></h3>
        <div>이곳에 설명이 들어갑니다</div>
        
      </div>
    </div>
  );
};

export default ProjectCard;

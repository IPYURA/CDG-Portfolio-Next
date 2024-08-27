import styles from "@/styles/projects.module.scss";
import ProjectCard from "@/components/Projects/ProjectCard";
import Link from "next/link";
import { roboto } from "../font";

const Projects = () => {
  return (
    <div className={styles.container}>
      <h3 className={`${styles.pageTitle} ${roboto.className}`}>PROJECTS</h3>
      <div className={styles.gridBox}>
        <Link href={"/projects/example"} className={styles.link}>
          <ProjectCard
            title="제목이 들어갑니다"
            stacks="#react #styled-components"
            description="이것은 설명입니다 이것은 설명입니다 설명이 들어갑니다.이것은 설명입니다 이것은 설명입니다 설명이 들어갑니다.이것은 설명입니다 이것은 설명입니다 설명이 들어갑니다."
          />
        </Link>
        <Link href={"/projects/example"} className={styles.link}>
          <ProjectCard
            title="제목이 들어갑니다"
            stacks="#react #styled-components"
            description="이것은 설명입니다 이것은 설명입니다 설명이 들어갑니다."
          />
        </Link>
        <Link href={"/projects/example"} className={styles.link}>
          <ProjectCard
            title="제목이 들어갑니다"
            stacks="#react #styled-components"
            description="이것은 설명입니다 이것은 설명입니다 설명이 들어갑니다."
          />
        </Link>
        <Link href={"/projects/example"} className={styles.link}>
          <ProjectCard
            title="제목이 들어갑니다"
            stacks="#react #styled-components #styled-components #styled-components"
            description="이것은 설명입니다 이것은 설명입니다 설명이 들어갑니다.이것은 설명입니다 이것은 설명입니다 설명이 들어갑니다.이것은 설명입니다 이것은 설명입니다 설명이 들어갑니다.이것은 설명입니다 이것은 설명입니다 설명이 들어갑니다."
          />
        </Link>
        <Link href={"/projects/example"} className={styles.link}>
          <ProjectCard
            title="제목이 들어갑니다"
            stacks="#react #styled-components"
            description="이것은 설명입니다 이것은 설명입니다 설명이 들어갑니다."
          />
        </Link>
      </div>
    </div>
  );
};

export default Projects;

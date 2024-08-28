import styles from "@/styles/projects.module.scss";
import ProjectCard from "@/components/Projects/ProjectCard";
import Link from "next/link";
import { roboto } from "../font";
import { tnData } from "@/projectData";

const Projects = () => {
  return (
    <div className={styles.container}>
      <h3 className={`${styles.pageTitle} ${roboto.className}`}>PROJECTS</h3>
      <div className={styles.gridBox}>
        <Link href={"/projects/myportfolio"} className={styles.link}>
          <ProjectCard
            image={tnData.portfolio}
            title="스타트업 프로젝트"
            stacks="#Next.js #Typescript"
            description="이것은 설명입니다 이것은 설명입니다 설명이 들어갑니다.이것은 설명입니다 이것은 설명입니다 설명이 들어갑니다.이것은 설명입니다 이것은 설명입니다 설명이 들어갑니다."
          />
        </Link>

        <Link href={"/projects/insight"} className={styles.link}>
          <ProjectCard
            image={tnData.insight}
            title="스타트업 프로젝트"
            stacks="#Next.js #Typescript"
            description="이것은 설명입니다 이것은 설명입니다 설명이 들어갑니다.이것은 설명입니다 이것은 설명입니다 설명이 들어갑니다.이것은 설명입니다 이것은 설명입니다 설명이 들어갑니다."
          />
        </Link>

        <Link href={"/projects/protein"} className={styles.link}>
          <ProjectCard
            image={tnData.protein}
            title="단백질 기록하기"
            stacks="#React #Redux #Styled-Components"
            description="이것은 설명입니다 이것은 설명입니다 설명이 들어갑니다."
          />
        </Link>

        <Link href={"/projects/customer"} className={styles.link}>
          <ProjectCard
            image={tnData.customer}
            title="고객 관리 시스템"
            stacks="#React #Typescript #AWS #Node.js #Express.js #MaterialUI"
            description="이것은 설명입니다 이것은 설명입니다 설명이 들어갑니다.이것은 설명입니다 이것은 설명입니다 설명이 들어갑니다.이것은 설명입니다 이것은 설명입니다 설명이 들어갑니다."
          />
        </Link>

        <Link href={"/projects/shoes"} className={styles.link}>
          <ProjectCard
            image={tnData.shoes}
            title="SHOES"
            stacks="#React #Redux-Thunk #Styled-Components"
            description="이것은 설명입니다 이것은 설명입니다 설명이 들어갑니다."
          />
        </Link>

        <Link href={"/projects/banksalad"} className={styles.link}>
          <ProjectCard
            image={tnData.banksalad}
            title="뱅크샐러드"
            stacks="#HTML #SCSS #Javascript"
            description="이것은 설명입니다 이것은 설명입니다 설명이 들어갑니다."
          />
        </Link>

        <Link href={"/projects/wordle"} className={styles.link}>
          <ProjectCard
            image={tnData.wordle}
            title="웹 게임 Wordle!"
            stacks="#HTML #SCSS #Javascript"
            description="이것은 설명입니다 이것은 설명입니다 설명이 들어갑니다."
          />
        </Link>

        <Link href={"/projects/kanban"} className={styles.link}>
          <ProjectCard
            image={tnData.kanban}
            title="칸반 보드"
            stacks="#React #Typescript #Recoil"
            description="이것은 설명입니다 이것은 설명입니다 설명이 들어갑니다."
          />
        </Link>

        <Link href={"/projects/zzanggu"} className={styles.link}>
          <ProjectCard
            image={tnData.zzanggu}
            title="내가 짱구 속 인물이라면?"
            stacks="#React #Typescript #Styled-Components"
            description="이것은 설명입니다 이것은 설명입니다 설명이 들어갑니다."
          />
        </Link>
      </div>
    </div>
  );
};

export default Projects;

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
            title="조동건의 포트폴리오 홈페이지"
            stacks="#Next.js #Typescript"
            description="보고 계신 포트폴리오 홈페이지입니다. 클릭하시면 개발 내용을 확인하실 수 있습니다."
          />
        </Link>

        <Link href={"/projects/insight"} className={styles.link}>
          <ProjectCard
            image={tnData.insight}
            title="스타트업 프로젝트"
            stacks="#Next.js #Typescript"
            description="풀스택 개발자 1명과 함께 외주를 받아 개발한 스타트업 기업의 홈페이지입니다."
          />
        </Link>

        <Link href={"/projects/protein"} className={styles.link}>
          <ProjectCard
            image={tnData.protein}
            title="단백질 기록하기"
            stacks="#React #Redux #Styled-Components"
            description="전역 상태관리 라이브러리 Redux를 사용하여 단백질의 목표를 정하고, 항목을 추가하여 목표 달성치를 보여주는 프로젝트입니다."
          />
        </Link>

        <Link href={"/projects/customer"} className={styles.link}>
          <ProjectCard
            image={tnData.customer}
            title="고객 관리 시스템"
            stacks="#React #Typescript #AWS #Node.js #Express.js #MaterialUI"
            description="AWS의 RDS를 사용하여 데이터를 저장합니다. Node.js와 Express.js로 RESTful API를 사용했습니다."
          />
        </Link>

        <Link href={"/projects/shoes"} className={styles.link}>
          <ProjectCard
            image={tnData.shoes}
            title="SHOES"
            stacks="#React #Redux-Thunk #Styled-Components"
            description="전역 상태관리 라이브러리 Redux-Thunk를 연습하며 만든 프로젝트입니다. Firebase의 Google 로그인 API를 사용하여 로그인을 구현했습니다."
          />
        </Link>

        <Link href={"/projects/banksalad"} className={styles.link}>
          <ProjectCard
            image={tnData.banksalad}
            title="뱅크샐러드"
            stacks="#HTML #SCSS #Javascript"
            description="뱅크샐러드 메인 페이지 클론코딩입니다."
          />
        </Link>

        <Link href={"/projects/kanban"} className={styles.link}>
          <ProjectCard
            image={tnData.kanban}
            title="칸반 보드"
            stacks="#React #Typescript #Recoil"
            description="마우스 드래그로 항목을 이동시킬 수 있는 칸반보드 To-Do List입니다. 전역 상태관리 라이브러리 Recoil 을 사용했습니다."
          />
        </Link>

        <Link href={"/projects/wordle"} className={styles.link}>
          <ProjectCard
            image={tnData.wordle}
            title="웹 게임 Wordle!"
            stacks="#HTML #SCSS #Javascript"
            description="5번의 기회 내에서 랜덤으로 정해지는 정답 단어를 맞추는 Wordle 게임입니다."
          />
        </Link>

        <Link href={"/projects/zzanggu"} className={styles.link}>
          <ProjectCard
            image={tnData.zzanggu}
            title="내가 짱구 속 인물이라면?"
            stacks="#React #Typescript #Styled-Components #Bootstrap"
            description="12문항의 질문을 통해 결과지를 보여주는 성격 테스트입니다."
          />
        </Link>
      </div>
    </div>
  );
};

export default Projects;

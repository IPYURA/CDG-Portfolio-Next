import styles from "@/styles/projects.module.scss";
import ProjectCard from "@/components/Projects/ProjectCard";
import Link from "next/link";
import { roboto } from "../font";

const Projects = () => {
  return (
    <div className={styles.container}>
      <h3 className={`${styles.pageTitle} ${roboto.className}`}>PROJECTS</h3>
      <div className={styles.gridBox}>
        <Link href={"/projects/example"}>
          <ProjectCard />
        </Link>
        <Link href={"/projects/example"}>
          <ProjectCard />
        </Link>
        <Link href={"/projects/example"}>
          <ProjectCard />
        </Link>
        <Link href={"/projects/example"}>
          <ProjectCard />
        </Link>
        <Link href={"/projects/example"}>
          <ProjectCard />
        </Link>
        <Link href={"/projects/example"}>
          <ProjectCard />
        </Link>
        <Link href={"/projects/example"}>
          <ProjectCard />
        </Link>
      </div>
    </div>
  );
};

export default Projects;

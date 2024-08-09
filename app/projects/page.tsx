import styles from "@/styles/projects.module.scss";
import Slider from "@/components/Projects/Slider";
import Description from "@/components/Projects/Description";
import UsedStack from "@/components/Projects/UsedStack";

const Projects = () => {
  return (
    <div className={styles.container}>
      <Slider/>
      <UsedStack/>
      <Description/>
    </div>
  )
  
};

export default Projects;

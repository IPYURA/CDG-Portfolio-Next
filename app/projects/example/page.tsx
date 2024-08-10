import styles from "@/styles/projects.module.scss";
import Slider from "@/components/Projects/Slider";
import Description from "@/components/Projects/Description";
import UsedStack from "@/components/Projects/UsedStack";

const Example = () => {
  return (
    <div className={styles.detailWrap}>
      <Slider />
      <UsedStack />
      <Description />
    </div>
  );
};

export default Example;

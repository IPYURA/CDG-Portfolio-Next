import styles from "@/styles/projects.module.scss";
import Slider from "@/components/Projects/Slider";
import Description from "@/components/Projects/Description";
import UsedStack from "@/components/Projects/UsedStack";

import mockData from "@/projectData";

const Example = () => {
  return (
    <div className={styles.detailWrap}>
      <Slider images={mockData.sliderImg}/>
      <UsedStack />
      <Description />
    </div>
  );
};

export default Example;

import styles from "@/styles/projects.module.scss";
import Slider from "@/components/Projects/Slider";
import Description from "@/components/Projects/Description";
import UsedStack from "@/components/Projects/UsedStack";
import StackBadge from "@/components/Projects/StackBadge";

import mockData from "@/projectData";

const Example = () => {
  return (
    <div className={styles.detailWrap}>
      <h2 className={styles.title}>제목이 들어갑니다.</h2>
      <Slider images={mockData.sliderImg} />
      <UsedStack>
        <StackBadge name="Next.js" />
        <StackBadge name="Next.js" />
        <StackBadge name="Next.js" />
      </UsedStack>
      <Description>
        <h3 className={styles.sectionTit}>작은 제목이들어갑니다.</h3>
        <div className={styles.desc}>이곳에는 내용이 들어갑니다.</div>
      </Description>
    </div>
  );
};

export default Example;

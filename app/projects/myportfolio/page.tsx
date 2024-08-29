import styles from "@/styles/detail.module.scss";
import Slider from "@/components/Detail/Slider";
import Description from "@/components/Detail/Description";
import UsedStack from "@/components/Detail/UsedStack";
import StackBadge from "@/components/Detail/StackBadge";
import LinkGithub from "@/components/Detail/LinkGithub";

import { portfolioData } from "@/projectData";

const MyPortfolio = () => {
  return (
    <div className={styles.detailWrap}>
      <Slider images={portfolioData.sliderImg} />
      <UsedStack>
        <StackBadge name="Next.js" />
        <StackBadge name="Typescript" />
      </UsedStack>
      <div className={styles.linkBox}>
        <span>방문하기: &nbsp;</span>
        <LinkGithub address="https://github.com/IPYURA/CDG-Portfolio-Next" />
      </div>
      <Description>
        <h2 className={styles.title}>[{portfolioData.title}]</h2>
        <h3 className={styles.sectionTit}>맞춤형 다크모드</h3>
        <h3 className={styles.sectionTit}>무한 슬라이더 컴포넌트</h3>
        <h3 className={styles.sectionTit}>이미지 blur</h3>
        <h3 className={styles.sectionTit}>Svg 처리</h3>

        <div className={styles.desc}>asdf</div>
      </Description>
    </div>
  );
};

export default MyPortfolio;

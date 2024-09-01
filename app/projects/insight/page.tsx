import styles from "@/styles/detail.module.scss";
import Slider from "@/components/Detail/Slider";
import Description from "@/components/Detail/Description";
import UsedStack from "@/components/Detail/UsedStack";
import StackBadge from "@/components/Detail/StackBadge";
import LinkGithub from "@/components/Detail/LinkGithub";
import LinkWeb from "@/components/Detail/LinkWeb";

import { insightData } from "@/projectData";

const Insight = () => {
  return (
    <div className={styles.detailWrap}>
      <Slider images={insightData.sliderImg} />
      <UsedStack>
        <StackBadge name="Next.js" />
        <StackBadge name="Typescript" />
      </UsedStack>
      <div className={styles.linkBox}>
        <span>방문하기: &nbsp;</span>
        <LinkGithub address="https://github.com/IPYURA/nextjs-project" />
        <LinkWeb address="https://www.eopinsight.com/" />
      </div>
      <Description>
        <h2 className={styles.title}>[{insightData.title}]</h2>
        <div className={styles.desc}>
          *전체 코드를 공개할 수 없어 이미지, 텍스트 등이 교체된 개발 중간 단계
          코드를 첨부합니다.
        </div>
        <h3 className={styles.sectionTit}>수행한 업무</h3>
        <div className={styles.desc}>
          상단부분 Contact, Donate 모달 및 Form 유효성 검증과 유효성에 따른 UI
          개발
          <br />
          페이지 퍼블리싱 및 반응형 개발
          <br />
          Header, 모바일 Header 등의 컴포넌트 개발
        </div>
      </Description>
    </div>
  );
};

export default Insight;

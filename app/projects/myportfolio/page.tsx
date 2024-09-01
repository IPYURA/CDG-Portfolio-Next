import styles from "@/styles/detail.module.scss";
import Slider from "@/components/Detail/Slider";
import Description from "@/components/Detail/Description";
import UsedStack from "@/components/Detail/UsedStack";
import StackBadge from "@/components/Detail/StackBadge";
import LinkGithub from "@/components/Detail/LinkGithub";
import Image from "next/image";
import blurImg from "@/public/images/projects/blur.png";

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
        <div className={styles.desc}>
          페이지에 접속하면 가장 먼저 로컬스토리지의 저장된 다크/라이트 값이
          있는지를 판단합니다.
          <br /> 페이지를 처음 방문했다면(로컬스토리지에 값이 없다면) 사용자의
          브라우저에서 설정되어 있는 테마를 적용시킵니다.
        </div>
        <h3 className={styles.sectionTit}>무한 슬라이더 컴포넌트</h3>
        <div className={styles.desc}>
          이미지의 배열이 슬라이더 컴포넌트에 Props로 들어가게 되어 슬라이더를
          만들어냅니다.
          <br />
          이미지의 개수만큼 슬라이더 하단에 페이저가 생기고, 이 페이저를 클릭 시
          해당 슬라이드로 이동합니다.
        </div>
        <h3 className={styles.sectionTit}>이미지 blur</h3>
        <div className={styles.desc}>
          이미지가 로드되는 동안 UI의 골격을 나타내는 스켈레톤 기법의 효과를
          주기 위해 Next.js에서 자체적으로 지원하는 blur 기능을 사용했습니다.
          이미지를 불러오고 있는 중일 경우, 아래의 이미지와 같이 blur 효과가
          표시됩니다.
          <div className={styles.imgWrap}>
            <Image src={blurImg} alt="descImg" />
          </div>
        </div>
        <h3 className={styles.sectionTit}>Svg 처리</h3>

        <div className={styles.desc}>
          다크/라이트 모드에 따라 변화되는 컬러에 대응하기 위해 svg 아이콘들을
          사용했습니다.
        </div>
      </Description>
    </div>
  );
};

export default MyPortfolio;

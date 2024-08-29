import styles from "@/styles/detail.module.scss";
import Slider from "@/components/Detail/Slider";
import Description from "@/components/Detail/Description";
import UsedStack from "@/components/Detail/UsedStack";
import StackBadge from "@/components/Detail/StackBadge";
import LinkGithub from "@/components/Detail/LinkGithub";
import LinkWeb from "@/components/Detail/LinkWeb";

import { proteinData } from "@/projectData";

const Protein = () => {
  return (
    <div className={styles.detailWrap}>
      <Slider images={proteinData.sliderImg} />
      <UsedStack>
        <StackBadge name="React" />
        <StackBadge name="Redux" />
        <StackBadge name="Styled-Components" />
      </UsedStack>
      <div className={styles.linkBox}>
        <span>방문하기: &nbsp;</span>
        <LinkGithub address="https://github.com/IPYURA/Protein-Write" />
        <LinkWeb address="https://nutrition-4a215.web.app/" />
      </div>
      <Description>
        <h2 className={styles.title}>[{proteinData.title}]</h2>
        <h3 className={styles.sectionTit}>주요 기능</h3>
        <div className={styles.desc}>
          <ul>
            <li>자주 먹는 음식 등록을 통해 항목 즉시 추가</li>
            <li>단백질 섭취 목표 설정 후 달성률 시각적으로 표시</li>
          </ul>
        </div>
        <h3 className={styles.sectionTit}>전역 상태관리 Redux</h3>
        <div className={styles.desc}>
          Redux를 연습해보며 만든 프로젝트입니다. Action과 Reducer, Store 간의
          객체 형태의 단방향 데이터 흐름을 만들어 내는 Redux의 원리에 대해
          학습했습니다.
          <br />
          원본 배열을 변화시키지 않도록 하며 Spread Opertor와 Destructuring
          Assignment의 개념을 다시 잡았습니다.
        </div>
        <h3 className={styles.sectionTit}>디자인</h3>
        <div className={styles.desc}>
          모든 프로젝트를 스스로 디자인했지만, 이 프로젝트는 특히 디자인에 많은
          시간을 투자했습니다. <br />
          유사한 컬러셋과 텍스트 색상 등을 고민하며 선정하였고,
          Styled-Components 의 ThemeProvider를 통해 전역적으로 사용될 스타일을
          설계했습니다.
        </div>
      </Description>
    </div>
  );
};

export default Protein;

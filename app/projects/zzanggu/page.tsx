import styles from "@/styles/detail.module.scss";
import Slider from "@/components/Detail/Slider";
import Description from "@/components/Detail/Description";
import UsedStack from "@/components/Detail/UsedStack";
import StackBadge from "@/components/Detail/StackBadge";
import LinkGithub from "@/components/Detail/LinkGithub";
import LinkWeb from "@/components/Detail/LinkWeb";

import { zzangguData } from "@/projectData";

const Zzanggu = () => {
  return (
    <div className={styles.detailWrap}>
      <Slider images={zzangguData.sliderImg} />
      <UsedStack>
        <StackBadge name="React" />
        <StackBadge name="Typescript" />
        <StackBadge name="Styled-Components" />
        <StackBadge name="Bootstrap" />
      </UsedStack>
      <div className={styles.linkBox}>
        <span>방문하기: &nbsp;</span>
        <LinkGithub address="https://github.com/IPYURA/zzanggu-MBTI-Test" />
        <LinkWeb address="https://mbti-test-b7527.web.app/" />
      </div>
      <Description>
        <h2 className={styles.title}>[{zzangguData.title}]</h2>
        <h3 className={styles.sectionTit}>주요 기능</h3>
        <div className={styles.desc}>
          <ul>
            <li>간단한 심리 검사 12문항을 통해 MBTI 성향을 파악</li>
            <li>
              짱구는 못말려의 인물들 중 성격이 비슷한 인물을 결과페이지에
              보여주고 간단한 설명 출력
            </li>
            <li>질문지의 진행 상황을 상단 Progress Bar로 표시</li>
          </ul>
        </div>
        <h3 className={styles.sectionTit}>동적 쿼리값으로 결과지 생성</h3>
        <div className={styles.desc}>
          문항에 답할 때마다 변수에 응답값이 저장되고, 문항이 모두 끝났을 때
          응답값을 종합아여 createSearchParams() 을 통해 동적으로 쿼리값을
          생성합니다.
          <br />
          결과 페이지에서 랜더링 시 쿼리값을 가져오고, 그 쿼리값에 맞는 데이터로
          이미지와 텍스트를 랜더링합니다.
        </div>
        <h3 className={styles.sectionTit}>어려웠던 점</h3>
        <div className={styles.desc}>
          마지막 문항에서 질문지의 인덱스를 초과하여 데이터를 불러오게 되어,
          데이터가 없다는 오류를 만나게 되었습니다.
          <br />
          이를 삼항 연산자의 조건식을 수정하여 문제를 해결했습니다. <br />
          React-Bootstrap 내의 Progress Bar를 불러와 사용했는데, transition
          속성으로 인해 width값이 마저 채워지지도 않았는데 다음페이지로 넘어가는
          것이 시각적으로 완료되지 않은 것처럼 보이는 문제가 있었습니다. <br />
          이를 setTimeout 메서드를 사용하여 Progress Bar의 애니메이션이 모두
          끝난 시점에 useNavigate가 동작하도록 했습니다. <br />
          쿼리 값을 전달하는 방법에 대해서도 학습할 수 있던 프로젝트였습니다.
        </div>
      </Description>
    </div>
  );
};

export default Zzanggu;

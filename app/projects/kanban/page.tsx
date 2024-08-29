import styles from "@/styles/detail.module.scss";
import Slider from "@/components/Detail/Slider";
import Description from "@/components/Detail/Description";
import UsedStack from "@/components/Detail/UsedStack";
import StackBadge from "@/components/Detail/StackBadge";
import LinkGithub from "@/components/Detail/LinkGithub";
import LinkWeb from "@/components/Detail/LinkWeb";

import { kanbanData } from "@/projectData";

const Kanban = () => {
  return (
    <div className={styles.detailWrap}>
      <Slider images={kanbanData.sliderImg} />
      <UsedStack>
        <StackBadge name="React" />
        <StackBadge name="Typescript" />
        <StackBadge name="Recoil" />
      </UsedStack>
      <div className={styles.linkBox}>
        <span>방문하기: &nbsp;</span>
        <LinkGithub address="https://github.com/IPYURA/Kanban-Board" />
        <LinkWeb address="https://kanban-board-7a807.web.app/" />
      </div>
      <Description>
        <h2 className={styles.title}>[{kanbanData.title}]</h2>
        <h3 className={styles.sectionTit}>주요 기능</h3>
        <div className={styles.desc}>
          <ul>
            <li>react-hook-form 을 사용하여 할 일 추가</li>
            <li>마우스 드래그로 할 일, 진행 중, 완료됨 보드 간 항목 이동</li>
          </ul>
        </div>
        <h3 className={styles.sectionTit}>Recoil을 통한 전역 상태관리</h3>
        <div className={styles.desc}>
          Atom으로 관리되는 Recoil의 작동 방식에 대해 공부할 수 있었고, Recoil을
          사용하면서 보일러플레이트가 많은 Redux에 비해 간결함을 체감할 수
          있었습니다.
          <br />
          할 일(TO_DO), 진행 중(DOING), 완료됨(DONE) 항목을 전역적인 상태로
          관리합니다. <br />
          Object.keys() 함수를 사용하여 배열의 이름 값들을 배열 형태로 불러오고,
          이름들이 모인 배열을 map메서드를 사용하면, 하나의 Atom으로도 여러 개의
          다른 컴포넌트를 생성할 수 있다는 사실을 학습했습니다.
        </div>
      </Description>
    </div>
  );
};

export default Kanban;

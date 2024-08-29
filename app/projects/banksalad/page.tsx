import styles from "@/styles/detail.module.scss";
import Slider from "@/components/Detail/Slider";
import Description from "@/components/Detail/Description";
import UsedStack from "@/components/Detail/UsedStack";
import StackBadge from "@/components/Detail/StackBadge";
import LinkGithub from "@/components/Detail/LinkGithub";
import LinkWeb from "@/components/Detail/LinkWeb";

import { banksaladData } from "@/projectData";

const Banksalad = () => {
  return (
    <div className={styles.detailWrap}>
      <Slider images={banksaladData.sliderImg} />
      <UsedStack>
        <StackBadge name="HTML" />
        <StackBadge name="SCSS" />
        <StackBadge name="Javascript" />
      </UsedStack>
      <div className={styles.linkBox}>
        <span>방문하기: &nbsp;</span>
        <LinkGithub address="https://github.com/IPYURA/Banksalad-clone" />
        <LinkWeb address="https://banksalad-clone.web.app/" />
      </div>
      <Description>
        <h2 className={styles.title}>[{banksaladData.title}]</h2>
        <h3 className={styles.sectionTit}>
          무한슬라이더의 기초와 Event 이론을 확실히 하다.
        </h3>
        <div className={styles.desc}>
          무한 슬라이더를 구현하는 데 필요한 기능 하나하나를 함수로 쪼개어
          클린코드를 작성하기 위해 노력했습니다.
          <br />
          V8엔진에서 addEventListener가 처리되는 과정에 대해 상세히 학습하였고,
          Call Stack과 Heap, Task Que에 대해 상세히 공부했습니다.
        </div>
        <h3 className={styles.sectionTit}>어려웠던 점 - StopSlider 오류</h3>
        <div className={styles.desc}>
          자동으로 넘어가는 슬라이더 내의 정보를 사용자가 편하게 볼 수 있도록
          마우스오버 시 슬라이더 Stop 기능을 구현했습니다.
          <br /> 페이저를 한 번 눌러 슬라이드를 이동한 시점부터 슬라이드가 더
          적은 주기로 자주 이동하는 오류가 있었습니다.
          <br />
          Task Que에 setInterval로 구현된 autoSlide 기능이 두 번 들어가게 된
          것이원인이라 판단했습니다.
          <br />
          CSS상으로 슬라이더 범위 안에 있던 페이저의 mouseleave 이벤트와
          슬라이더의 mouseleave 이벤트가 중복 적용되는 것을 확인하고, <br />
          사이즈가 더 큰 슬라이더의 이벤트만 남기는 것으로 해결했습니다.
        </div>
      </Description>
    </div>
  );
};

export default Banksalad;

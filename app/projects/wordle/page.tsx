import styles from "@/styles/detail.module.scss";
import Slider from "@/components/Detail/Slider";
import Description from "@/components/Detail/Description";
import UsedStack from "@/components/Detail/UsedStack";
import StackBadge from "@/components/Detail/StackBadge";
import LinkGithub from "@/components/Detail/LinkGithub";
import LinkWeb from "@/components/Detail/LinkWeb";

import { wordleData } from "@/projectData";

const Wordle = () => {
  return (
    <div className={styles.detailWrap}>
      <Slider images={wordleData.sliderImg} />
      <UsedStack>
        <StackBadge name="HTML" />
        <StackBadge name="SCSS" />
        <StackBadge name="Javascript" />
      </UsedStack>
      <div className={styles.linkBox}>
        <span>방문하기: &nbsp;</span>
        <LinkGithub address="https://github.com/IPYURA/Wordle" />
        <LinkWeb address="https://wordle-cdg.web.app/" />
      </div>
      <Description>
        <h2 className={styles.title}>[{wordleData.title}]</h2>
        <h3 className={styles.sectionTit}>주요 기능</h3>
        <div className={styles.desc}>
          <ul>
            <li>페이지가 로드될 때, 정답 랜덤 생성</li>
            <li>정답에 포함된 철자일 경우, 노란색 표시</li>
            <li>정답에 포함되고, 정확한 위치일 경우 초록색 표시</li>
            <li>5번의 기회가 끝나거나, 정답을 맞추면 모달 결과창 생성</li>
          </ul>
        </div>
        <h3 className={styles.sectionTit}>스마트폰에서의 플레이 고려</h3>
        <div className={styles.desc}>
          스마트폰의 경우, 영어 첫 글자를 대문자로 자동입력하는 경우가
          많았습니다. toLowerCase() 메서드를 사용하여 자동으로 소문자로 바꾸어
          주어 해결했습니다.
          <br />
          input의 한글 입력을 막기 위한 style 속성으로 ime-mode:disabled 가
          있다는 것을 알았습니다.
          <br />
          하지만 더 검색해보니 이는 웹 표준에 어긋나기 때문에 사용하지 않는 것을
          권장한다는 사실을 알았습니다.
          <br />
          이를 replace메서드와 정규식을 사용하여 알파벳이 아닐 경우 빈 문자열로
          대체되도록 하였습니다.
          <br />
          이후 input.value 값이 빈 문자열이고, input의 index가 마지막이 아니면
          다음 형제 요소의 input에 focus되도록 하여 해결했습니다.
        </div>
        <h3 className={styles.sectionTit}>알게 된 점</h3>
        <div className={styles.desc}>
          innerHTML으로 새로운 노드를 추가했을 때, 기존 input 값이 보존되지 않고
          초기화되는 문제가 있었습니다.
          <br />
          insertAdjacentHTML('beforeend', )를 사용하여 해결했습니다.
        </div>
      </Description>
    </div>
  );
};

export default Wordle;

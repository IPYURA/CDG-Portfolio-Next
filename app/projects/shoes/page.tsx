import styles from "@/styles/detail.module.scss";
import Slider from "@/components/Detail/Slider";
import Description from "@/components/Detail/Description";
import UsedStack from "@/components/Detail/UsedStack";
import StackBadge from "@/components/Detail/StackBadge";
import LinkGithub from "@/components/Detail/LinkGithub";
import LinkWeb from "@/components/Detail/LinkWeb";

import { shoesData } from "@/projectData";

const Shoes = () => {
  return (
    <div className={styles.detailWrap}>
      <Slider images={shoesData.sliderImg} />
      <UsedStack>
        <StackBadge name="React" />
        <StackBadge name="Redux-Thunk" />
        <StackBadge name="Styled-Components" />
      </UsedStack>
      <div className={styles.linkBox}>
        <span>방문하기: &nbsp;</span>
        <LinkGithub address="https://github.com/IPYURA/Kanban-Board" />
        <LinkWeb address="https://kanban-board-7a807.web.app/" />
      </div>
      <Description>
        <h2 className={styles.title}>[{shoesData.title}]</h2>
        <h3 className={styles.sectionTit}>주요 기능</h3>
        <div className={styles.desc}>
          <ul>
            <li>Google 계정으로 로그인</li>
            <li>로그인 여부에 따라 장바구니 추가, 찜하기 사용가능</li>
            <li>상품의 이미지, 이름 클릭 시 상품 상세 페이지 이동</li>
            <li>상품명 검색 기능</li>
            <li>하트 아이콘을 눌러 찜하기</li>
            <li>상품 상세 페이지에서 장바구니에 추가</li>
            <li>장바구니목록, 찜목록 페이지에서 항목 삭제, 전체 삭제 </li>
          </ul>
        </div>
        <h3 className={styles.sectionTit}>Redux-Thunk</h3>
        <div className={styles.desc}>
          동기적인 처리만 가능한 Redux와 달리, Redux-Thunk는 비동기 처리가
          가능합니다.
          <br />본 프로젝트에서는 로그인 상태(Authenticate), 찜하기 목록,
          장바구니 목록을 별도의 Reducer로 관리합니다.
          <br />
          전역 상태인 authenticate 에 따라 찜목록, 장바구니 등의 페이지로의
          라우팅 여부가 결정됩니다.
          <br />
          Reducer에 저장되어 있는 찜목록은 빨간색으로 바뀐 하트 아이콘을 통해
          시각적으로 확인할 수 있습니다.
        </div>
        <h3 className={styles.sectionTit}>
          페이지 이동 시 스크롤이 초기화되지 않는 문제
        </h3>
        <div className={styles.desc}>
          SPA에서 일반적으로 발생하는 문제라는 사실을 알게 되었습니다.
          <br />
          이를 해결하기 위해 util 파일에 useLocation과 useEffect를 사용하여
          스크롤을 초기화시키는 함수를 만들었습니다. 이 함수를 최상위
          컴포넌트에서 전역적으로 실행시켜 스크롤 문제를 해결했습니다.
        </div>
        <h3 className={styles.sectionTit}>
          map 메서드로 상품이 화면에 나타나지 않는 문제
        </h3>
        <div className={styles.desc}>
          product라는 state를 만들어주고, 이 state에 데이터가 배열 형식으로
          들어갈 예정이었습니다. <br />
          Item컴포넌트 반복출력을 위해 map 메서드를 사용했지만, 배열이 아니라는
          오류가 나왔습니다. <br />
          fetch를 통해 호스팅된 JSON데이터를 받아오고, data 라는 변수에 저장하기
          위해 json 함수를 사용했습니다. <br />
          하지만 await fetch문이 실행되고 Promise가 처리되는 동안 setState가
          실행되어 undefined 상태의 data변수를 state에 저장하고 있다는 사실을
          확인했습니다.
          <br /> fetch는 Response 객체로 이행하는 Promise가 반환된다는 사실을
          학습했고, json함수에도 Promise 객체의 완료를 기다리는 await을 사용하여
          해결했습니다. <br />이 문제를 통해 async와 await에 대한 개념을 더 깊이
          학습할 수 있었습니다.
        </div>
        <h3 className={styles.sectionTit}>
          회원가입 이후 로그인 시 회원가입 페이지로 돌아가는 문제
        </h3>
        <div className={styles.desc}>
          상품의 디테일 페이지 등에서 authenticate를 충족시키지 않아 로그인
          페이지로 이동했을 경우, 사용자 경험 상 페이지의 연속성을 주어야 한다고
          생각했습니다.
          <br />
          그래서 로그인 완료 시 뒤로가기 방식을 채택했었지만 회원가입을 통해
          로그인한 사용자에게는 적합하지 않다고 판단했습니다.
          <br />
          useNavigate에 states를 전달할 수 있다는 사실을 알게 되었고 회원가입을
          통해 로그인페이지로 온 사용자에게만 state에 true값을 주어
          로그인페이지에서 삼항연산자를 쓰는 방식으로 문제를 해결했습니다.
        </div>
        <h3 className={styles.sectionTit}>
          찜하기 아이콘의 찜목록 미반영 문제
        </h3>
        <div className={styles.desc}>
          찜하기 아이콘(하트)이 메인 페이지와 상품의 상세페이지에 존재하는데,
          전역적인 상태가 반영이 되었음에도 하트 아이콘이 눌림상태가 되지 않는
          문제가 있었습니다.
          <br />
          Redux의 Action을 통한 Reducer 내 InitialState의 변경이 이루어져도
          useEffect를 통해 컴포넌트가 재렌더링 되지 않는다는 사실을
          발견하였습니다.
          <br />
          이를 해결하기 위해, 하트 아이콘이 있는 두 페이지에 각각 페이지 내에서
          작동하는 스타일을 위한 State를 만들고 비교 연산자를 통한 논리를
          만들어주었고, 문제를 해결했습니다.
        </div>
      </Description>
    </div>
  );
};

export default Shoes;

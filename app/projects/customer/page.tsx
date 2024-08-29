import styles from "@/styles/detail.module.scss";
import Slider from "@/components/Detail/Slider";
import Description from "@/components/Detail/Description";
import UsedStack from "@/components/Detail/UsedStack";
import StackBadge from "@/components/Detail/StackBadge";
import LinkGithub from "@/components/Detail/LinkGithub";
import LinkWeb from "@/components/Detail/LinkWeb";

import { customerData } from "@/projectData";

const Customer = () => {
  return (
    <div className={styles.detailWrap}>
      <Slider images={customerData.sliderImg} />
      <UsedStack>
        <StackBadge name="React" />
        <StackBadge name="Typescript" />
        <StackBadge name="Node.js" />
        <StackBadge name="Express.js" />
        <StackBadge name="AWS" />
        <StackBadge name="MaterialUI" />
      </UsedStack>
      <div className={styles.linkBox}>
        <span>방문하기: &nbsp;</span>
        <LinkGithub address="https://github.com/IPYURA/nodeJS-project" />
        {/* <LinkWeb address="" /> */}
      </div>
      <Description>
        <h2 className={styles.title}>[{customerData.title}]</h2>
        <h3 className={styles.sectionTit}>
          프로젝트 설명(현재 RDS 는 막아놓아 gitHub만 첨부합니다)
        </h3>
        <div className={styles.desc}>
          Express.js 프레임워크를 사용하여 HTTP 서버를 설정하고, AWS의 RDS를
          사용하여 데이터베이스(MySQL)를 연결하여 고객 추가 및 삭제 기능을
          개발했습니다.
          <br />
          삭제 시에는 고객 데이터를 실제로 삭제하지 않고 isDeleted 플래그를 1로
          업데이트하여 isDeleted = 0 인 데이터를 가져오는 WHERE 조건문에 의해
          화면에만 표시되지 않도록 했습니다.
          <br />
          <br />
          multer라는 파일 업로드를 위한 미들웨어를 따로 설치하여 이미지 파일을
          업로드할 수 있도록 했습니다.
          <br />
          <br />
          Form을 통해 작성된 항목들과 이미지 경로값을 INSERT 쿼리문을 실행하여
          클라이언트에 SQL 실행 결과를 반환합니다.
        </div>
      </Description>
    </div>
  );
};

export default Customer;

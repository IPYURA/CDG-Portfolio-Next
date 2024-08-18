import styles from "../styles/home.module.scss";
import Link from "next/link";

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.flexBox}>
        <div className={styles.picture}>이미지</div>
        <section className={styles.desc}>
          <h1 className={styles.title}>
            <em>Front-End</em> 개발자를 꿈꾸는
            <br /> 조동건입니다.
          </h1>
          <h4 className={styles.introText}>
            저는 전자공학과에서 C언어를 배우며 프로그래밍에 흥미를 느꼈습니다.
            앞에 놓인 기계를 움직이는 것을 넘어, 프로그래밍을 통해 웹이라는 더
            넓은 세상에 영향을 끼치고 싶습니다.
          </h4>
          <div className={styles.stackBox}></div>
        </section>
      </div>
    </main>
  );
}

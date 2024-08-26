import styles from "../styles/home.module.scss";
import Link from "next/link";
import { roboto } from "./font";
import Image from "next/image";
import MainImg from "../public/images/img-me.jpg";
import StackList from "@/components/Home/StackList";
import Svg from "@/components/Svg";
import IconArrow from "@/public/icons/icon-right-arrow.svg";

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.flexBox}>
        <div className={styles.pictureWrap}>
          <div className={styles.picture}>
            <Image src={MainImg} alt="mainImg" priority placeholder="blur" />
          </div>
          <div className={styles.contact}>
            <div className={styles.phone}>Phone: 010-8434-8174</div>
            <div className={styles.mail}>Mail: 0207ehdrjs@naver.com</div>
          </div>
        </div>
        <section className={styles.desc}>
          <h1 className={styles.title}>
            <em className={roboto.className}>Front-End</em> 개발자를 꿈꾸는
            <br /> 조동건입니다.
          </h1>
          <h4 className={styles.introText}>
            저는 전자공학과에서 C언어를 배우며 프로그래밍에 흥미를 느꼈습니다.
            앞에 놓인 기계를 움직이는 것을 넘어, 프로그래밍을 통해 웹이라는 더
            넓은 세상에 영향을 끼치고 싶습니다.
          </h4>
          <StackList />
        </section>
        <Link href="/projects">
          프로젝트 보기
          <Svg width={13} height={10} color="#ffffff">
            <IconArrow />
          </Svg>
        </Link>
      </div>
    </main>
  );
}

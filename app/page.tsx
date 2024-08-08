import styles from "../styles/home.module.scss";
import TestDartButton from "@/components/TestDarkButton";
import Link from "next/link";

export default function Home() {
  return (
    <main className={styles.main}>
      <div>
        <h3>테스트 텍스트입니다</h3>
      </div>      
      <TestDartButton />
    </main>
  );
}

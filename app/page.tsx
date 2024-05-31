import styles from "./page.module.css";
import { WritingArea } from './components/WritingArea/WritingArea';

export default function Home() {
  return (
    <main className={styles.main}>
      <WritingArea/>
    </main>
  );
}

import styles from "./page.module.css";
// import { WritingArea } from './components/WritingArea/WritingArea';
import Slider from "./components/Slider/Slider";

export default function Home() {
  return (
    <main className={styles.main}>
      {/* <WritingArea/> */}
      <Slider projectName="My Project"/>
    </main>
  );
}

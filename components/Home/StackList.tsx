import Stack from "./Stack";
import styles from "@/styles/home.module.scss";
import { stacks } from "@/app/stackImg";

const StackList = () => {
  return (
    <div className={styles.stackList}>
      <div className={styles.classification}>
        <h3>Language, Javascript Library / Framework</h3>
        <div className={styles.items}>
          <Stack name="HTML" image={stacks.html} star={true} />
          <Stack name="CSS" image={stacks.css} star={true} />
          <Stack name="Javascript" image={stacks.javascript} star={true} />
          <Stack name="Typescript" image={stacks.typescript} star={true} />
          <Stack name="React" image={stacks.react} star={true} />
          <Stack name="Next.js" image={stacks.next} star={true} />
          <Stack name="Vue.js" image={stacks.vue} />
        </div>
      </div>
      <div className={styles.classification}>
        <h3>Related to CSS</h3>
        <div className={styles.items}>
          <Stack name="SCSS" image={stacks.scss} star={true} />
          <Stack
            name="Styled-Components"
            image={stacks.styledComponents}
            star={true}
          />
          <Stack name="Bootstrap" image={stacks.bootstrap} />
          <Stack name="TailwindCSS" image={stacks.tailwind} />
        </div>
      </div>
      <div className={styles.classification}>
        <h3>Tools</h3>
        <div className={styles.items}>
          <Stack name="Github" image={stacks.github} star={true} />
          <Stack name="Figma" image={stacks.figma} />
        </div>
      </div>
    </div>
  );
};

export default StackList;

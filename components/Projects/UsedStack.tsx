import styles from "@/styles/projects.module.scss";
import StackBadge from "./StackBadge";

const UsedStack =() => {
    return (
        <div className={styles.usedStack}>
           <StackBadge name="React"/> 
           <StackBadge name="Styled-Components"/>
           <StackBadge name="React"/> 
        </div>
    )
}

export default UsedStack;
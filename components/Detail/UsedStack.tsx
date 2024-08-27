import styles from "@/styles/detail.module.scss";
import { ReactNode } from "react";

const UsedStack = ({ children }: { children: ReactNode }) => {
  return <div className={styles.usedStack}>{children}</div>;
};

export default UsedStack;

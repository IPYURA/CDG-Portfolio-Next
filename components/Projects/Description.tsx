import styles from "@/styles/projects.module.scss";

const Description = ({ children }: any) => {
  return <div className={styles.description}>{children}</div>;
};

export default Description;

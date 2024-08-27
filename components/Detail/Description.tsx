import styles from "@/styles/detail.module.scss";

const Description = ({ children }: any) => {
  return <div className={styles.description}>{children}</div>;
};

export default Description;

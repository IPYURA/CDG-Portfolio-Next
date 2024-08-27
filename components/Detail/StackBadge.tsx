import styles from "@/styles/detail.module.scss";

const StackBadge = ({ name }: { name: string }) => {
  return <div className={styles.stackBadge}>{name}</div>;
};

export default StackBadge;

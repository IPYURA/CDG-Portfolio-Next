import styles from "@/styles/detail.module.scss";
import Link from "next/link";
import Svg from "../Svg";
import IconGitHub from "@/public/icons/icon-github.svg";

const LinkGithub = ({ address }: { address: string }) => {
  return (
    <Link href={address} className={styles.iconLink} target="_blank">
      <Svg width={32} height={32}>
        <IconGitHub />
      </Svg>
    </Link>
  );
};

export default LinkGithub;

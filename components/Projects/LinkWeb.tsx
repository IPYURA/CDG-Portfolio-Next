import styles from "@/styles/projects.module.scss";
import Link from "next/link";
import Svg from "../Svg";
import IconWeb from "@/public/icons/icon-web.svg";

const LinkWeb = ({ address }: { address: string }) => {
  return (
    <Link href={address} className={styles.iconLink} target="_blank">
      <Svg width={32} height={32}>
        <IconWeb />
      </Svg>
    </Link>
  );
};

export default LinkWeb;

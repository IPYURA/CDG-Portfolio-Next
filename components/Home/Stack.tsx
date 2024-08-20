import { StaticImageData } from "next/image";
import Image from "next/image";
import styles from "@/styles/home.module.scss";
import Svg from "../Svg";
import IconStar from "@/public/icons/icon-star.svg";
import { roboto } from "@/app/font";

interface IStackProps {
  name: string;
  image: StaticImageData;
  star?: true;
}
const Stack = ({ name, image, star }: IStackProps) => {
  return (
    <div className={styles.stack}>
      <Image src={image} alt={name} priority width={24} height={24} />
      <span className={roboto.className}>{name}</span>
      {star ? (
        <div className={styles.star}>
          <Svg width={12} height={12} color={"gold"}>
            <IconStar />
          </Svg>
        </div>
      ) : undefined}
    </div>
  );
};

export default Stack;

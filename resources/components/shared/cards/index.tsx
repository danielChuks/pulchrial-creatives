import { CardProps } from "@/resources/interfaces";
import styles from "./index.module.scss";
import { generateCardColor } from "@/resources/util/generateCardColor";
import { CARD_TYPES } from "@/resources/enums/card-type";

const reflectColor = (colors: CARD_TYPES) => {
  return generateCardColor(colors);
};

export default function Card({ icon, title, value, type }: CardProps) {
  return (
    <div className={styles["container"]}>
      <div
        style={{
          color: reflectColor(type).style?.color,
          backgroundColor: reflectColor(type).style?.backgroundColor,
        }}
        className={styles["icon"]}
      >
        <span>{icon}</span>
      </div>
      <div>{title}</div>
      <div>{value}</div>
    </div>
  );
}

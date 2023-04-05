import { CardProps } from "@/resources/interfaces";
import styles from "./index.module.scss";
import { generateCardColor } from "@/resources/util/generateCardColor";
import { CARD_TYPES } from "@/resources/enums/card-type";


const reflectColor = (colors: CARD_TYPES) => {
  if(CARD_TYPES.USERS){
    return CARD_TYPES.USERS
  }
  if(CARD_TYPES.ACTIVE_USERS){
    return CARD_TYPES.ACTIVE_USERS
  }
  if(CARD_TYPES.USERS_WITH_LOAN){
    return CARD_TYPES.USERS_WITH_LOAN
  }
  if(CARD_TYPES.USERS_WITH_SAVING){
    return CARD_TYPES.USERS_WITH_SAVING
  }
}


export default function Card({ icon, title, value }: CardProps) {
  return (
    <div className={styles["container"]}>
      <div className={styles["icon"]}>
        <span
          style={{
            color: generateCardColor(CARD_TYPES.USERS).bg,
            backgroundColor: generateCardColor(CARD_TYPES.USERS).in,
          }}
        >
          {icon}
        </span>
      </div>
      <div>{title}</div>
      <div>{value}</div>
    </div>
  );
}

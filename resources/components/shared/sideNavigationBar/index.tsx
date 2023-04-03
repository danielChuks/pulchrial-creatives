import styles from "./index.module.scss";
import { RiArrowDropDownLine } from "react-icons/ri";
import { ImBriefcase } from "react-icons/im";

export default function SideNav() {
  return (
    <div className={styles["container"]}>
      <div>
        <div className={styles["header"]}>
          <div>
            <ImBriefcase />
          </div>
          <div>Switch Organisation</div>
          <div>
            <RiArrowDropDownLine />
          </div>
        </div>
      </div>
    </div>
  );
}

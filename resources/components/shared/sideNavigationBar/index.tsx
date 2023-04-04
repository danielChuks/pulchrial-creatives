import styles from "./index.module.scss";
import { RiArrowDropDownLine } from "react-icons/ri";
import { ImBriefcase } from "react-icons/im";
import { MdHouse } from "react-icons/md";
import CustomersList from "./ListComponent/CustomersList";
import BusinessList from "./ListComponent/BusinessList";

export default function SideNav() {
  return (
    <div className={styles["container"]}>
      <div className={styles["header"]}>
        <div>
          <ImBriefcase />
        </div>
        <div>Switch Organisation</div>
        <div>
          <RiArrowDropDownLine />
        </div>
      </div>

      <div className={styles["dashboard"]}>
        <div>
          <MdHouse />
        </div>
        <div>Dashboard</div>
      </div>

      <div className={styles["customers-container"]}>
        <div className={styles["customer"]}>Customers</div>
        <div className={"items-container"}>
          <CustomersList icon={"icon"} title={"users"} />
        </div>
      </div>

      <div className={styles['business-container']}>
        <div className={styles['business']}>Business</div>
        <div className={styles['items-container']}>
          <BusinessList icon={"icon"} title={"Africa"} />
        </div>
      </div>
    </div>
  );
}

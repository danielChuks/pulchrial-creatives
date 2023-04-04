import styles from "./index.module.scss";
import { RiArrowDropDownLine } from "react-icons/ri";
import { ImBriefcase, ImUsers } from "react-icons/im";
import { MdHouse } from "react-icons/md";
import ItemCard from "./ListComponent/ItemCard";
import {HiOutlineUserGroup} from 'react-icons/hi';

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

      <div className={styles["list-container"]}>
        <div className={styles["title"]}>Customers</div>
        <div className={"items-container"}>
          <ItemCard icon={<ImUsers />} title={"users"} />
          <ItemCard icon={<HiOutlineUserGroup/>} title={"Guarantors"} />
          <ItemCard icon={"icon"} title={"loans"} />
          <ItemCard icon={"icon"} title={"decision models"} />
          <ItemCard icon={"icon"} title={"savings"} />
          <ItemCard icon={"icon"} title={"loan request"} />
          <ItemCard icon={"icon"} title={"whitelist"} />
          <ItemCard icon={"icon"} title={"karma"} />
        </div>
      </div>

      <div className={styles["list-container"]}>
        <div className={styles["title"]}>Business</div>
        <div className={"items-container"}>
          <ItemCard icon={"icon"} title={"users"} />
          <ItemCard icon={"icon"} title={"users"} />
          <ItemCard icon={"icon"} title={"users"} />
          <ItemCard icon={"icon"} title={"users"} />
          <ItemCard icon={"icon"} title={"users"} />
          <ItemCard icon={"icon"} title={"users"} />
          <ItemCard icon={"icon"} title={"users"} />

        </div>
      </div>
    </div>
  );
}

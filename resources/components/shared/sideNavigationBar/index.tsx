import styles from "./index.module.scss";
import { RiArrowDropDownLine } from "react-icons/ri";
import { ImBriefcase, ImUsers } from "react-icons/im";
import { MdHouse } from "react-icons/md";
import ItemCard from "./ListComponent/ItemCard";
import { HiOutlineUserGroup } from "react-icons/hi";
import { GiReceiveMoney } from "react-icons/gi";
import { TbMoneybag } from "react-icons/tb";
import { FaRegHandshake, FaPiggyBank } from "react-icons/fa";
import { FiUserCheck, FiUserX } from "react-icons/fi";

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
          <ItemCard icon={<HiOutlineUserGroup />} title={"Guarantors"} />
          <ItemCard icon={<TbMoneybag />} title={"loans"} />
          <ItemCard icon={<FaRegHandshake />} title={"decision models"} />
          <ItemCard icon={<FaPiggyBank />} title={"savings"} />
          <ItemCard icon={<GiReceiveMoney />} title={"loan request"} />
          <ItemCard icon={<FiUserCheck />} title={"whitelist"} />
          <ItemCard icon={<FiUserX />} title={"karma"} />
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

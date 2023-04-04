import styles from "./index.module.scss";
import ItemCard from "./ListComponent/ItemCard";
import { RiArrowDropDownLine } from "react-icons/ri";
import { ImBriefcase, ImUsers } from "react-icons/im";
import { MdHouse, MdViewCompact } from "react-icons/md";
import { HiOutlineUserGroup } from "react-icons/hi";
import { GiReceiveMoney } from "react-icons/gi";
import { TbMoneybag } from "react-icons/tb";
import {
  FaRegHandshake,
  FaPiggyBank,
  FaFan,
  FaUserCog,
  FaScroll,
} from "react-icons/fa";
import { FiUserCheck, FiUserX, FiDivideCircle } from "react-icons/fi";
import { BsHouseHeart, BsFillDatabaseFill } from "react-icons/bs";
import { BiTransferAlt, BiNotepad } from "react-icons/bi";
import { AiOutlineBarChart } from "react-icons/Ai";

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
          <ItemCard icon={<ImBriefcase />} title={"organisation"} />
          <ItemCard icon={<GiReceiveMoney />} title={"loan product"} />
          <ItemCard icon={<BsHouseHeart />} title={"savings product"} />
          <ItemCard icon={<BsFillDatabaseFill />} title={"fees and charges"} />
          <ItemCard icon={<BiTransferAlt />} title={"transactions"} />
          <ItemCard icon={<FaFan />} title={"services"} />
          <ItemCard icon={<FaUserCog />} title={"service account"} />
          <ItemCard icon={<FaScroll />} title={"settlements"} />
          <ItemCard icon={<AiOutlineBarChart />} title={"reports"} />
        </div>
      </div>

      <div className={styles["list-container"]}>
        <div className={styles["title"]}>settings</div>
        <div className={"items-container"}>
          <ItemCard icon={<MdViewCompact />} title={"preferences"} />
          <ItemCard icon={<FiDivideCircle />} title={"fees and charges"} />
          <ItemCard icon={<BiNotepad />} title={"audit logs"} />
        </div>
      </div>
    </div>
  );
}

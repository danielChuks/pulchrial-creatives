import TopNav from "../shared/navigationBar";
import SideNav from "../shared/sideNavigationBar";
import Card from "../shared/cards";
import styles from "./index.module.scss";
import { FiUsers } from "react-icons/fi";
import { HiOutlineUserGroup } from "react-icons/hi";
import { AiOutlineFileSync } from "react-icons/Ai";
import { BsDatabaseFill } from "react-icons/bs";
import { generateCardColor } from "@/resources/util/generateCardColor";

export default function DashboardPage() {
  return (
    <>
      <div>
        <TopNav />
      </div>
      <div className={styles["body-section"]}>
        <SideNav />

        <div className={styles["container"]}>
          <div className={styles["title"]}> users </div>
          <div className={styles["card-section"]}>

            <Card icon={<FiUsers 
              
            />}
             title={"users"} 
             value={Math.floor(2453)} />
            <Card
              icon={<HiOutlineUserGroup />}
              title={"active users"}
              value={Math.floor(2453)}
            />
            <Card
              icon={<AiOutlineFileSync />}
              title={"users with loans"}
              value={Math.floor(2453)}
            />
            <Card
              icon={<BsDatabaseFill />}
              title={"users with savings"}
              value={Math.floor(2453)}
            />
          </div>
        </div>
      </div>
    </>
  );
}

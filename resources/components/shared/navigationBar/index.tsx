import styles from "./index.module.scss";
import Image from "next/image";
import logo from "../../../../public/images/Group.svg";
import SearchBar from "../searchBar";
import Link from "next/link";
import { IoIosNotificationsOutline } from "react-icons/Io";

export default function TopNav() {
  return (
    <div className={styles["nav"]}>
      <div className={styles["logo"]}>
        <Image src={logo} height={36} width={138.44} alt="banner" />
      </div>
      <div>
        <SearchBar />
      </div>
     
      <div className={styles['right-nav']}>
      <div>
        <Link href="#">Docs</Link>
      </div>
        <div>
          <IoIosNotificationsOutline />
        </div>
        <div>
          
        </div>
      </div>
    </div>
  );
}

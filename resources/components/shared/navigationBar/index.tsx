import styles from "./index.module.scss";
import Image from "next/image";
import logo from "../../../../public/images/Group.svg";
import SearchBar from "../searchBar";
import Link from "next/link";
import { IoIosNotificationsOutline } from "react-icons/Io";
import { RiArrowDropDownFill } from "react-icons/ri";
import face from "../../../../public/images/my-face.jpg";

export default function TopNav() {
  return (
    <div className={styles["nav"]}>
      <div className={styles["logo"]}>
        <Image src={logo} height={36} width={138.44} alt="banner" />
      </div>
      <div className={styles['search-bar']}>
        <SearchBar />
      </div>

      <div className={styles["right-nav"]}>
        <div>
          <Link href="#">Docs</Link>
        </div>
        <div >
          <IoIosNotificationsOutline className={styles['notifications']}/>
        </div>
        <div className={styles["image"]}>
          <Image src={face} height={48} width={48} alt="image" />
        </div>
        <div className={styles["profile"]}>
          <div>Daniel</div>
          <div>
            <Link href={"#"}>
              <RiArrowDropDownFill />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

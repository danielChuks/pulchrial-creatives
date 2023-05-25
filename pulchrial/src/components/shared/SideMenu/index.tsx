import { FiSettings } from "react-icons/fi";
import styles from "./index.module.scss";
import { BsScissors } from "react-icons/bs";
import { MdOutlineConnectWithoutContact } from "react-icons/md";
import Link from "next/link";

export default function SideBar() {
    return (
        <div className={styles["container"]}>
            <div className={styles["content"]}>
                <div className={styles["florish"]}>
                    <div>
                        <BsScissors />
                    </div>
                    <Link href={"/flourish"} className={styles["link"]}>
                        <div>Flourish</div>
                    </Link>
                </div>

                <div className={styles["contact"]}>
                    <div>
                        <MdOutlineConnectWithoutContact />
                    </div>
                    <Link href={"/contact"} className={styles["link"]}>
                        <div>Contact us</div>
                    </Link>
                </div>
                <div className={styles["contact"]}>
                    <div>
                        <MdOutlineConnectWithoutContact />
                    </div>
                    <Link href={"/about"} className={styles["link"]}>
                        <div>About us</div>
                    </Link>
                </div>
            </div>
            <div>
                <div className={styles["settings"]}>
                    <FiSettings /> <span>Settings</span>
                </div>
            </div>
        </div>
    );
}

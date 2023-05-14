import styles from "./index.module.scss";
import { IoIosNotificationsOutline } from "react-icons/io";





export function Notification() {
    return (
        <div className={styles["notification"]}>
            <span>3</span>
            <IoIosNotificationsOutline
                className={styles["notification-icon"]}
            />
        </div>
    );
}

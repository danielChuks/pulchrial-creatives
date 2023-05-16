import styles from "./index.module.scss";
import { IoIosNotificationsOutline } from "react-icons/io";

interface NotificationProps {
    onClick: () => void;
}

export function Notification({ onClick }: NotificationProps) {
    

    return (
        <div className={styles["notification"]}>
            <span>3</span>
            <IoIosNotificationsOutline onClick={onClick}
                className={styles["notification-icon"]}
            />
        </div>
    );
}

import styles from "./index.module.scss";
import { IoIosNotificationsOutline } from "react-icons/io";

export default function index() {
    return (
        <div className={styles["container"]}>
            <div className={styles["logo"]}>pulchrial</div>
            <div className={styles["detail-section"]}>
                {/* <div>About</div>
                <div>Contact </div> */}
                <div className={styles['notification']}>
                    <span>3</span>
                    <IoIosNotificationsOutline className={styles['notification-icon'] } />
                </div>
                <div className={styles["avi"]}>
                    <img
                        src={
                            "https://res.cloudinary.com/dhkgwi02z/image/upload/v1683640119/cld-sample.jpg"
                        }
                    />
                </div>
            </div>
        </div>
    );
}

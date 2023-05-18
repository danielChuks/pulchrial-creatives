import React from "react";
import styles from "./index.module.scss";
import NavigationBarItems from "./NotificationBarItems";

export default function NotificationComponent() {
    return (
        <>
            <div className={styles["container"]}>
                <NavigationBarItems/>
            </div>
        </>
    );
}

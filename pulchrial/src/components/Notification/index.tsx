import React from "react";
import styles from "./index.module.scss";

export default function NotificationComponent() {
    return (
        <>
            <div className={styles["container"]}>
                <NotificationComponent />
            </div>
        </>
    );
}

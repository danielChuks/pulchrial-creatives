import React from "react";
import styles from "./index.module.scss";

export default function NavigationBar() {
    return (
        <>
            <div className={styles["container"]}>
                <div className={styles["items-container"]}>
                    <div className={styles["content"]}>
                        <div className={styles["inner-class"]}>
                            <div>Daniel Chuks</div>
                            <span>Some people you may know</span>
                        </div>
                        <div className={styles["image"]}>
                            <img src={""} />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

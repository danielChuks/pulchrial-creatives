"use client";
import styles from "./index.module.scss";
import { Notification } from "../notification";
import { AiOutlineMenu } from "react-icons/ai";
import SideBar from "../sideMenu";
import { useState } from "react";

export default function TopNav() {
    const [showSidebar, setShowSidebar] = useState(true);

    const toggle = () => {
        setShowSidebar(!showSidebar);
    };

    return (
        <>
            <div className={styles["container"]}>
                <div className={styles["toggle"]} onClick={toggle}>
                    <AiOutlineMenu />
                </div>
                <div className={styles["logo"]}>pulchrial</div>
                <div className={styles["detail-section"]}>
                    <div className={styles["sub-section"]}>
                        <div>About</div>
                        <div>Contact </div>
                    </div>
                    <Notification />
                    <div className={styles["avi"]}>
                        <img
                            src={
                                "https://res.cloudinary.com/dhkgwi02z/image/upload/v1683640119/cld-sample.jpg"
                            }
                        />
                    </div>
                </div>
            </div>

            {!showSidebar && (
                <div className={styles['sidebar']}>
                    <SideBar />
                </div>
            )}
        </>
    );
}

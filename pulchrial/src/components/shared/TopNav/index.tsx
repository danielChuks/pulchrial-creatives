"use client";
import styles from "./index.module.scss";
import { Notification } from "../Notification";
import { AiOutlineMenu } from "react-icons/ai";
import SideBar from "../SideMenu";
import { useState } from "react";
import Link from "next/link";

export default function TopNav() {
    const [showSidebar, setShowSidebar] = useState(false);

    const toggle = () => {
        setShowSidebar(!showSidebar);
    };

    return (
        <>
            <div className={styles["container"]}>
                <div className={styles["toggle"]} onClick={toggle}>
                    <AiOutlineMenu />
                </div>
                <div className={styles["logo"]}>Pulchrial</div>
                <div className={styles["detail-section"]}>
                    <div className={styles["sub-section"]}>
                        <Link href={"/about"} className={styles["link"]}>
                            <div className={styles["link"]}>About</div>
                        </Link>
                        <Link href={"/contact"} className={styles["link"]}>
                            <div className={styles["link"]}>Contact</div>
                        </Link>
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
            <div className={styles["sideBar-wrapper"]}>
                {showSidebar && (
                    <div className={styles["sidebar"]}>
                        <SideBar />
                    </div>
                )}
            </div>
        </>
    );
}

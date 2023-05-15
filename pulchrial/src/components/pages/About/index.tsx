import React from "react";
import styles from "./index.module.scss";
import TopNav from "@/components/shared/TopNav";

export default function AboutPage() {
    return (
        <>
            <TopNav />
            <div className={styles["container"]}>
                <div className={styles["image"]}>
                    <img
                        src={`https://res.cloudinary.com/dhkgwi02z/image/upload/v1684142318/model-in-gold-fashion_gx7kgk.jpg`}
                    />
                </div>
                <div className={styles["text"]}>
                    
                </div>
            </div>
        </>
    );
}

import React from "react";
import { Cards } from "../Contact/Displaycards";
import styles from "./index.module.scss";
import { TopNav } from "@/components/shared/TopNav";

export function FlorishComponent() {
    return (
        <div className={styles["florish-container"]}>
            <TopNav />
            <div>
                <Cards />
            </div>
        </div>
    );
}

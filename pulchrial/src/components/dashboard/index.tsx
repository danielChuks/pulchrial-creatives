import React from "react";
import CardsComponent from "../shared/Cards";
import styles from "./index.module.scss";

export default function Dashboard() {
    return (
        <div className={styles["dashboard-container"]}>
            <div className={styles["content"]}>
                <div className={styles["bg-content"]}>
                    <span>Welcome </span> {` to Pulchrial Creatives`}
                    <div
                        className={styles["motto"]}
                    >{`Vive imaginationem`}</div>
                </div>
            </div>

            <div className={styles["fashion-display"]}>
                <div className={styles["fash-col-1"]}>
                    <img
                        src={
                            "https://res.cloudinary.com/dhkgwi02z/image/upload/v1684144437/pulchrial-creatives/pexels-los-muertos-crew-7998339_gfcqqi.jpg"
                        }
                    />
                </div>

                <div className={styles["fash-col-2"]}>
                    <div className={styles["styling-text"]}>
                        {`Our design philosophy is centered around creating clothing that blends modern and traditional styles, resulting in a unique and timeless aesthetic that stands the test of time. We draw inspiration from the beauty and diversity of the world around us, from art and culture to nature and the environment. This fusion of influences enables us to create designs that are original, bold, and distinctive.`}
                    </div>{" "}
                </div>
            </div>

            <div className={styles["fashion-display-2"]}>
                <div className={styles["fash-col-1"]}>
                    <img
                        src={
                            "https://res.cloudinary.com/dhkgwi02z/image/upload/v1684147887/pulchrial-creatives/pexels-los-muertos-crew-8030151_dlicqj.jpg"
                        }
                    />
                </div>
                <div className={styles["fash-col-2"]}>
                    <div className={styles["styling-text"]}>
                        {`At Pulchrial Creatives, we believe that fashion is more than just clothing; it's an expression of one's individuality, creativity, and confidence. We are dedicated to crafting designs that are not only fashionable but also functional, comfortable, and sustainable.`}
                    </div>{" "}
                </div>
            </div>
        </div>
    );
}

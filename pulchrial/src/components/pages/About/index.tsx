import React from "react";
import styles from "./index.module.scss";
import { TopNav } from "@/components/shared/TopNav";

export  function AboutPage() {
    return (
        <>
            <TopNav />
            <div className={styles["container"]}>
                <div className={styles["logo"]}>About Creatives</div>
                <div className={styles["item-container"]}>
                    <div className={styles["image"]}>
                        <img
                            src={`https://res.cloudinary.com/dhkgwi02z/image/upload/v1684095458/pulchrial-creatives/IMG_0011_hpsnri.jpg`}
                        />
                    </div>
                    <div className={styles["text"]}>
                        Redefining Fashion with Elegance and Creativity
                        Pulchrial Creatives is a fashion brand that celebrates
                        the art of fashion with elegance, creativity, and
                        timeless designs. The brand was founded with a vision to
                        create clothing that is not only beautiful but also
                        empowering and reflects the unique personality of the
                        wearer. 
                    </div>
                </div>
                <div className={styles["section-2"]}>
                    <div className={styles["image"]}>
                        <img
                            src={
                                "https://res.cloudinary.com/dhkgwi02z/image/upload/v1684143505/pulchrial-creatives/pexels-ksenia-chernaya-3965539_bpfoff.jpg"
                            }
                        />
                    </div>
                    <div className={styles["text"]}>
                        From luxurious silks and velvets to soft cotton and
                        linen, every piece is crafted to perfection using
                        meticulous attention to detail and exceptional
                        craftsmanship. We also prioritize sustainability and
                        ethical practices in our production process, ensuring
                        that our clothing is not only beautiful but also
                        responsible. In addition to our
                        clothing, we also offer a range of accessories,
                        including handbags, jewelry, and scarves.
                        {/* Each accessory is carefully curated to complement our clothing designs,
                        adding the perfect finishing touch to any outfit. In
                        conclusion, Pulchrial Creatives is a fashion brand that
                        redefines fashion with elegance, creativity, and
                        timeless designs. We are committed to creating clothing
                        that not only looks good but also feels good, empowering
                        our clients to express their unique personality and
                        style. With our dedication to quality, sustainability,
                        and ethical practices, we are setting a new standard for
                        the fashion industry. */}
                    </div>
                </div>
            </div>
        </>
    );
}

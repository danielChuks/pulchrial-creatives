import React from "react";
import styles from "./index.module.scss";
import TopNav from "@/components/shared/TopNav";

export default function AboutPage() {
    return (
        <>
            <TopNav />
            <div className={styles["container"]}>
                <div className={styles["logo"]}>Pulchrial Creatives</div>
                <div className={styles["item-container"]}>
                    <div className={styles["image"]}>
                        <img
                            src={`https://res.cloudinary.com/dhkgwi02z/image/upload/v1684142318/model-in-gold-fashion_gx7kgk.jpg`}
                        />
                    </div>
                    <div className={styles["text"]}>
                        Redefining Fashion with Elegance and Creativity
                        Pulchrial Creatives is a fashion brand that celebrates
                        the art of fashion with elegance, creativity, and
                        timeless designs. The brand was founded with a vision to
                        create clothing that is not only beautiful but also
                        empowering and reflects the unique personality of the
                        wearer. Our design philosophy is centered around
                        creating clothing that blends modern and traditional
                        styles, resulting in a unique and timeless aesthetic
                        that stands the test of time. We draw inspiration from
                        the beauty and diversity of the world around us, from
                        art and culture to nature and the environment. This
                        fusion of influences enables us to create designs that
                        are original, bold, and distinctive. We are committed to
                        using only the finest quality fabrics and materials in
                        all our designs.
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
                        responsible. At Pulchrial Creatives, we offer a wide
                        range of clothing for both men and women, including
                        dresses, skirts, jackets, and more. Our designs are
                        suitable for all occasions, from casual wear to formal
                        events, making it easy for our clients to express their
                        unique style and personality. In addition to our
                        clothing, we also offer a range of accessories,
                        including handbags, jewelry, and scarves. Each accessory
                        is carefully curated to complement our clothing designs,
                        adding the perfect finishing touch to any outfit. In
                        conclusion, Pulchrial Creatives is a fashion brand that
                        redefines fashion with elegance, creativity, and
                        timeless designs. We are committed to creating clothing
                        that not only looks good but also feels good, empowering
                        our clients to express their unique personality and
                        style. With our dedication to quality, sustainability,
                        and ethical practices, we are setting a new standard for
                        the fashion industry.
                    </div>
                </div>
            </div>
        </>
    );
}

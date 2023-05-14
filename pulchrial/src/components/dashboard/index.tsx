import React from 'react';
import CardsComponent from '../shared/Cards';
import styles from './index.module.scss';

export default function Dashboard() {
    return (
        <div className={styles['dashboard-container']}>
            <div className={styles['top-container']}>
                <div className={styles['header']}>
                    {`Welcome to Pulchrial Creatives`}
                </div>
                <div className={styles['sub-content']}>
                    <div className={styles['']}>{`
                    Pulchrial Creatives is a fashion brand that celebrates the art of fashion with elegance, creativity, and timeless designs. The brand was founded with a vision to create clothing that is not only beautiful but also empowering and reflects the unique personality of the wearer.`}</div>
                </div>
            </div>
            <div className={styles['description-section']}>
                <div className={styles['description-image']}>
                    <img
                        src={
                            'https://res.cloudinary.com/dhkgwi02z/image/upload/v1684095947/pulchrial-creatives/IMG_0572_hgxgsg.jpg'
                        }
                    />
                </div>

                <div className={styles['description-text']}>
                    {`Our design philosophy is centered around creating clothing that blends modern and traditional styles, resulting in a unique and timeless aesthetic that stands the test of time. We draw inspiration from the beauty and diversity of the world around us, from art and culture to nature and the environment. This fusion of influences enables us to create designs that are original, bold, and distinctive.`}
                </div>
            </div>

            <div className={styles['fashion-display']}>
                <img
                    src={
                        'https://res.cloudinary.com/dhkgwi02z/image/upload/v1684095452/pulchrial-creatives/IMG_0118_fasds6.jpg'
                    }
                />
            </div>
        </div>
    );
}

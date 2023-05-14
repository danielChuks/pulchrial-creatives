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

            <div className={styles['fashion-display']}>
                <div>Hello </div>
                <div>
                    <img
                        src={
                            'https://res.cloudinary.com/dhkgwi02z/image/upload/v1684095452/pulchrial-creatives/IMG_0118_fasds6.jpg'
                        }
                    />
                </div>
            </div>
        </div>
    );
}

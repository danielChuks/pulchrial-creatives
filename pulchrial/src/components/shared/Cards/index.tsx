import React from 'react';
import styles from './index.module.scss';

export default function CardsComponent() {
    return (
        <div className={styles['cards-container']}>
            <div className={styles['card']}>
                <img
                    src={
                        'https://res.cloudinary.com/dhkgwi02z/image/upload/v1684095458/pulchrial-creatives/IMG_0011_hpsnri.jpg'
                    }
                    alt="domi"
                    style={{ width: '100%' }}
                />
            </div>

            <div className={styles['hide']}>
                <img
                    src={
                        'https://res.cloudinary.com/dzl7hb2xw/image/upload/v1683723089/landing/Frame_1_ojaxgc.svg'
                    }
                    alt="domi"
                    style={{ width: '100%' }}
                />
            </div>
        </div>
    );
}

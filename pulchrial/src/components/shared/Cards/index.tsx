import React from 'react';
import styles from './index.module.scss';

export default function CardsComponent() {
    return (
        <div className={styles['cards-container']}>
            <div className={styles['card']}>
                <img
                    src={'https://res.cloudinary.com/dzl7hb2xw/image/upload/v1683723089/landing/Frame_1_ojaxgc.svg'}
                    alt="domi"
                    style={{ width: '100%' }}
                />
                <div className={styles['container']}></div>
            </div>
        </div>
    );
}

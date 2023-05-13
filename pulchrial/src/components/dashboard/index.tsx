import React from 'react';
import CardsComponent from '../shared/Cards';
import styles from './index.module.scss';

export default function Dashboard() {
    return (
        <div className={styles['dashboard-container']}>
            <div className={styles['top-container']}>
                <div className={styles['header']}>
                    {`Welcome to Pulcrial Creatives`}
                </div>
                <div className={styles['sub-content']}></div>
            </div>

            <CardsComponent />
            <CardsComponent />
            <CardsComponent />
            <CardsComponent />
        </div>
    );
}

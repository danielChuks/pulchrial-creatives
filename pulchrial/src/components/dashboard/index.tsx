import React from 'react';
import CardsComponent from '../shared/Cards';
import styles from  './index.module.scss';

export default function Dashboard() {
    return (
        <div className={styles['dashboard-container']}>
            <CardsComponent />
            <CardsComponent />
            <CardsComponent />
            <CardsComponent />
        </div>
    );
}

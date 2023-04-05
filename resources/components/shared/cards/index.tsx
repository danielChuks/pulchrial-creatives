import { CardProps } from "@/resources/interfaces";
import styles from './index.module.scss'



export default function Card({icon, title, value} : CardProps) {
  return (
    <div className={styles['container']}>
        <div className={styles['icon']}>{icon}</div>
        <div>{title}</div>
        <div>{value}</div>
    </div>
  )
}

import { FiSettings } from "react-icons/fi";
import styles from './index.module.scss';


export default function SideBar() {
    return (
        <div className={styles['container']}>
            <div className={styles['content']}>
                <div>About</div>
                <div>Contact</div>
            </div>
            <div>
                <div className={styles['settings']}>
                    <FiSettings /> <span>Settings</span>
                </div>
            </div>
        </div>
    );
}

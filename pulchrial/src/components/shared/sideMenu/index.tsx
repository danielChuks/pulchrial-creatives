import { FiSettings } from 'react-icons/fi';
import styles from './index.module.scss';
import { BsScissors } from 'react-icons/bs';
import { MdOutlineConnectWithoutContact } from 'react-icons/md';
import Link from 'next/link';

export default function SideBar() {
    return (
        <div className={styles['container']}>
            <div className={styles['content']}>
                <div className={styles['florish']}>
                    <Link href={'./'}>
                        <div>
                            <BsScissors />
                        </div>
                        <div>Florish</div>
                    </Link>
                </div>
                <div className={styles['contact']}>
                    <div>
                        <MdOutlineConnectWithoutContact />
                    </div>
                    <div>Contact us</div>
                </div>
            </div>
            <div>
                <div className={styles['settings']}>
                    <FiSettings /> <span>Settings</span>
                </div>
            </div>
        </div>
    );
}

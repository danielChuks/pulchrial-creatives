import { useState } from 'react';
import styles from './index.module.scss';

export function Button() {
    const [loading, setLoading] = useState('false');
    const [error, setError] = useState('false');
    const [success, setSuccess] = useState('false');



  return (
      <div className={styles['container']}>
          <button type='submit' className={styles['button']}
          
          >
              {/* {loading ? 
                  " Sign up " } */}
          </button>

    </div>
  )
}

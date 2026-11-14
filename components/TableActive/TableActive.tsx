'use client'

import { useEffect } from 'react';
import styles from './TableActive.module.css'
import { useActionStore } from '@/stores/actionStore'

const TableActive = () => {
    const history = useActionStore(state => state.history);
    const resetActionStore = useActionStore(state => state.resetActionStore);

    useEffect(() => {
        resetActionStore();
    }, [resetActionStore])

    return (
        <div className={styles.activityContainer}>
            <h2 className='sectionLabel'>Table activity</h2>

            <svg width='14' height='14' className={styles.iconHistory}>
                <use href='sprite.svg#icon-history'/>
            </svg>
            <ul>
            {history.slice(0,2).map((item) => (
                <li key={item.id} className={styles.oneTurn}>
                    <p className={styles.activity}>
                        {item.playerName} {item.action}
                    </p>
                    <p className={styles.round}>
                        + {item.cardPoints ?? 0} prestige
                    </p>
                    
                </li>
            ))}
            </ul>

            <p className={`textInstruction ${styles.textAccent}`}>
                First to 15 prestige triggers the final round.
            </p>
        </div>
    );
};

export default TableActive;
'use client'

import styles from './YourMerchant.module.css'
import Image from 'next/image';
import { useGamesStore } from '@/stores/gameStore';

const YourMerchant = () => {
    const { game } = useGamesStore();
    const you = game?.players.find(player => player.id === game.currentPlayerId);

   return (
    <div className={styles.yourMerchantContainer}>
            <div className={styles.merchantProfile}>
                <h2 className='sectionLabel'>Your merchant</h2>
                <div className={styles.yourProfile}>
                    <Image src='/OpponentPortrait.png' width={52} height={52} alt='Your portrait'/>
                    <div className={styles.yourInfo}>
                        <p className={styles.youText}>You · {you?.name}</p>
                        <p className={styles.yourCardsAmount}>{`${you?.developmentCards.length ?? 0} developments`}</p>
                    </div>
                    <div className={styles.yourPoints}>
                        <svg width='14' height='14'><use href='sprite.svg#icon-crown'/></svg>
                        <p>{you?.points ?? 0}</p>
                    </div>
                </div>
                <div className={styles.yourPrestige}>
                    <div className={styles.prestigeHeader}>
                        <p className={styles.prestigeLabel}>Prestige</p>
                        <p className={styles.prestigeValue}>{you?.points ?? 0} / 15</p>
                    </div>
                    <div
                        className={styles.progressTrack}
                        role="progressbar"
                        aria-label="Prestige"
                        aria-valuenow={you?.points}
                        aria-valuemin={0}
                        aria-valuemax={15}
                    >
                    <div
                        className={styles.progressFill}
                        style={{ width: `${((you?.points ?? 0) / 15) * 100}%` }}
                    />
                    </div>

                    <p className={styles.prestigeHint}>
                        {`${(15 - (you?.points ?? 0))}  prestige to the final round`}
                    </p>
                </div>
        </div>
    </div>
 )
}

export default YourMerchant;
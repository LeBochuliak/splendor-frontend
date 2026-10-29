import styles from './YourMerchant.module.css'
import Image from 'next/image';

const YourMerchant = () => {
 return (
    <div className={styles.yourMerchantContainer}>
            <div className={styles.merchantProfile}>
                <h2 className='sectionLabel'>Your merchant</h2>
                <div className={styles.yourProfile}>
                    <Image src='/OpponentPortrait.png' width={52} height={52} alt='Your portrait'/>
                    <div className={styles.yourInfo}>
                        <p className={styles.youText}>You</p>
                        <p className={styles.yourCardsAmount}>9 developments</p>
                    </div>
                    <div className={styles.yourPoints}>
                        <svg width='14' height='14'><use href='sprite.svg#icon-crown'/></svg>
                        <p>9</p>
                    </div>
                </div>
                <div className={styles.yourPrestige}>
                    <div className={styles.prestigeHeader}>
                        <p className={styles.prestigeLabel}>Prestige</p>
                        <p className={styles.prestigeValue}>7 / 15</p>
                    </div>
                    <div
                        className={styles.progressTrack}
                        role="progressbar"
                        aria-label="Prestige"
                        aria-valuenow={7}
                        aria-valuemin={0}
                        aria-valuemax={15}
                    >
                    <div
                        className={styles.progressFill}
                        style={{ width: `${(7 / 15) * 100}%` }}
                    />
                    </div>

                    <p className={styles.prestigeHint}>
                        8 prestige to the final round
                    </p>
                </div>
        </div>
    </div>
 )
}

export default YourMerchant;
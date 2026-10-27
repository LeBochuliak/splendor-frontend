import styles from './TableActive.module.css'

const TableActive = () => {
    return (
        <div className={styles.activityContainer}>
            <h2 className='sectionLabel'>Table activity</h2>
            <svg width='14' height='14' className={styles.iconHistory}><use href='sprite.svg#icon-history'/></svg>

            <div className={`${styles.oneTurn} ${styles.firstTurnBox}`}>
                <p className={styles.activity}>Lorenzo purchased The Jeweler</p>
                <p className={styles.round}>Round 11 · +1 prestige</p>
            </div>
            <div className={styles.oneTurn}>
                <p className={styles.activity}>Lorenzo purchased The Jeweler</p>
                <p className={styles.round}>Round 11 · +1 prestige</p>
            </div>
            <p className={`textInstruction ${styles.textAccent}`}>First to 15 prestige triggers the final round.</p>
        </div>
    )
}

export default TableActive;
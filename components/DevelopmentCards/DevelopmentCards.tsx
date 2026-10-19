import styles from './DevelopmentCards.module.css';

const DevelopmentCards = () => {
    return (
        <div className={styles.cardsContainer}>
            <h2 className='sectionLabel'>Development cards</h2>
            <p className={`textInstruction ${styles.InstText}`}>Prestige at left · Gem bonus at right · Cost below</p>
            <ul className={styles.cards}>
                
                <li className={styles.cardsLevel}>
                    <ul className={styles.level}>
                        <li className={styles.tier}>
                            <p className={styles.tierLabel}>Tier</p>
                            <p className={styles.tierNumber}>III</p>
                            <p className={styles.tierAmount}>16</p>
                        </li>
                        <li className={styles.card}></li>
                    </ul>   
                </li>

            </ul>
            
        </div>
    )
}

export default DevelopmentCards;
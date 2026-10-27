import styles from './TurnBox.module.css';
import Image from 'next/image';

const TurnBox = () => {
    return (
        <div className={styles.turnBoxContainer}>
            <h2 className='sectionLabel'>Your Turn</h2>
            <h3 className={styles.titleTurn}>Your next move.</h3>
            <p className='textInstruction'>Take 3 different gems, or 2 of one kind when at least 4 are available.</p>
            <ul className={styles.choosenTokens}>
                <li><svg width='42' height='42'><use href='sprite.svg#icon-Next-gem'/></svg></li>
                <li><svg width='42' height='42'><use href='sprite.svg#icon-Next-gem'/></svg></li>
                <li><svg width='42' height='42'><use href='sprite.svg#icon-Next-gem'/></svg></li>
                <li className={styles.amount}>2 / 3</li>
            </ul>
            <p className={styles.textMove}>Choose one more gem from the bank.</p>
            <button type='button' className={styles.confirmBtn}><svg width='16' height='16'><use href='sprite.svg#icon-check'/></svg>Confirm selection</button>
            <button type='button' className={styles.clearBtn}>Clear selection</button>
        </div>
    )
}

export default TurnBox;
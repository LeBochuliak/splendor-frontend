import styles from './Opponent.module.css';
import Image from 'next/image';

const Opponent = () => {
    return (
        <div className={styles.opponentContainer}>
            <div className={styles.headWrapper}>
                <Image src='/opponentPortrait.png' width={44} height={44} alt='Portrait'/>
                <div className={styles.opponentInfo}>
                    <p className={styles.name}>Lorenzo</p>
                    <p className={styles.cards}>{`Opponent · 9 developments`}</p>            
                </div>
                <div className={styles.points}>
                    <svg width='13' height='13'><use href='sprite.svg#icon-crown'/></svg>
                    <p>9</p>
                </div>
            </div>
            <ul className={styles.opponentTokens}>
                <li className={styles.white}><svg width='16' height='16' className='gem--white'><use href='/sprite.svg#icon-Gemstone'/></svg><p>2</p></li>
                <li className={styles.blue}><svg width='16' height='16' className='gem--blue'><use href='/sprite.svg#icon-Gemstone'/></svg><p>2</p></li>
                <li className={styles.green}><svg width='16' height='16' className='gem--green'><use href='/sprite.svg#icon-Gemstone'/></svg><p>2</p></li>
                <li className={styles.red}><svg width='16' height='16' className='gem--red'><use href='/sprite.svg#icon-Gemstone'/></svg><p>2</p></li>
                <li className={styles.black}><svg width='16' height='16' className='gem--black'><use href='/sprite.svg#icon-Gemstone'/></svg><p>2</p></li>
                <li className={styles.gold}><svg width='16' height='16' className='gem--gold'><use href='/sprite.svg#icon-Gemstone'/></svg><p>2</p></li>
            </ul>
            <p className={styles.reservedCards}>1 reserved card · 6 / 10 tokens</p>
            
            <ul className={styles.opponentBonuses}>
                <li className={styles.text}>Bonuses</li>
                <li className={styles.white}><svg width='13' height='13' className='gem--white'><use href='/sprite.svg#icon-Gemstone'/></svg><p>2</p></li>
                <li className={styles.blue}><svg width='13' height='13' className='gem--blue'><use href='/sprite.svg#icon-Gemstone'/></svg><p>2</p></li>
                <li className={styles.green}><svg width='13' height='13' className='gem--green'><use href='/sprite.svg#icon-Gemstone'/></svg><p>2</p></li>
                <li className={styles.red}><svg width='13' height='13' className='gem--red'><use href='/sprite.svg#icon-Gemstone'/></svg><p>2</p></li>
                <li className={styles.black}><svg width='13' height='13' className='gem--black'><use href='/sprite.svg#icon-Gemstone'/></svg><p>2</p></li>
            </ul>
        </div>
    )
}

export default Opponent;
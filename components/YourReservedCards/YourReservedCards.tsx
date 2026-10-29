import styles from './YourReservedCards.module.css'
import Image from 'next/image'

const YourReservedCards = () => {
    return (
        <div className={styles.yourReservedCardsContainer}>
            
                <h2 className='sectionLabel'>Reserved cards</h2>
                <p className={styles.amount}>1 / 3 slots</p>
            
            <div className={styles.headerWrapper}>
            <div className={styles.slots}>
                <button type='button' aria-label="Previous card">
                    ‹
                </button>

                <div className={styles.slot} style={{
                            backgroundImage: `url("/cards/1.png")`}}>
                                <p className={styles.cardsPoints}>4</p>
                                <div className={styles.cardsBonus}>
                                    <svg width='19' height='19'><use href='/sprite.svg#icon-Gemstone'/></svg>
                                </div>
                                <ul className={styles.cardsPrice}>
                                    <li className={styles.white}><svg width='13' height='13' className='gem--white'><use href='/sprite.svg#icon-Gemstone'/></svg><p>2</p></li>
                                    <li className={styles.blue}><svg width='13' height='13' className='gem--blue'><use href='/sprite.svg#icon-Gemstone'/></svg><p>2</p></li>
                                    <li className={styles.green}><svg width='13' height='13' className='gem--green'><use href='/sprite.svg#icon-Gemstone'/></svg><p>2</p></li>
                                    <li className={styles.red}><svg width='13' height='13' className='gem--red'><use href='/sprite.svg#icon-Gemstone'/></svg><p>2</p></li>
                                    <li className={styles.black}><svg width='13' height='13' className='gem--black'><use href='/sprite.svg#icon-Gemstone'/></svg><p>2</p></li>
                                </ul>
                </div>

                <button type='button' aria-label="Next card">
                    ›
                </button>

            </div>
            <div className={styles.buttonWrapper}>
                <button className={styles.btn} type='button'><svg width='16' height='16'><use href='sprite.svg#icon-shopping-bag'/></svg>Buy a card</button>
                <button className={styles.btn} type='button'><svg width='16' height='16'><use href='sprite.svg#icon-bookmark'/></svg>Reserve a card</button>
                <p className={styles.text}>Or select a development on the table.</p>
            </div>
            </div>
        </div>
    )
}

export default YourReservedCards;
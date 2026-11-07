'use client'

import styles from './YourReservedCards.module.css'
import { useGamesStore } from '@/stores/gameStore';

const YourReservedCards = () => {
    const { game } = useGamesStore();
    const you = game?.players.find(player => player.id === game.currentPlayerId);

    return (
        <div className={styles.yourReservedCardsContainer}>
            
                <h2 className='sectionLabel'>Reserved cards</h2>
                <p className={styles.amount}>{`${you?.reservedCards.length ?? 0} / 3 slots`}</p>
            
            <div className={styles.headerWrapper}>
            <div className={styles.slots}>
                <button type='button' aria-label="Previous card">
                    ‹
                </button>

                <ul>
                {you && you?.reservedCards.length > 0 ?
                    you?.reservedCards.map(card => {
                        return <li key={card.id} className={styles.slot} style={{
                            backgroundImage: `url("/cards/${card.id}.png")`}}>
                                <p className={styles.cardsPoints}>{card.points}</p>
                                <div className={styles.cardsBonus}>
                                    <svg width='19' height='19'><use href='/sprite.svg#icon-Gemstone'/></svg>
                                </div>
                                <ul className={styles.cardsPrice}>
                                    {(card.price.white > 0) && <li className={styles.white}><svg width='13' height='13' className='gem--white'><use href='/sprite.svg#icon-Gemstone'/></svg><p>{card.price.white}</p></li>}
                                    {(card.price.blue > 0) && <li className={styles.blue}><svg width='13' height='13' className='gem--blue'><use href='/sprite.svg#icon-Gemstone'/></svg><p>{card.price.blue}</p></li>}
                                    {(card.price.green > 0) && <li className={styles.green}><svg width='13' height='13' className='gem--green'><use href='/sprite.svg#icon-Gemstone'/></svg><p>{card.price.green}</p></li>}
                                    {(card.price.red > 0) && <li className={styles.red}><svg width='13' height='13' className='gem--red'><use href='/sprite.svg#icon-Gemstone'/></svg><p>{card.price.red}</p></li>}
                                    {(card.price.black > 0) && <li className={styles.black}><svg width='13' height='13' className='gem--black'><use href='/sprite.svg#icon-Gemstone'/></svg><p>{card.price.black}</p></li>}
                                </ul>
                            </li>
                        })
                    
                    :
                    <div className={styles.emptyBox}></div>
                }
                </ul>

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

 
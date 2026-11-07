'use client'

import styles from './DevelopmentCards.module.css';
import { useGamesStore } from '@/stores/gameStore';

const DevelopmentCards = () => {
    const { game } = useGamesStore();

    const emptyLevel3 = 4 - (game?.cards.level3.board.length ?? 0);
    const emptyLevel2 = 4 - (game?.cards.level2.board.length ?? 0);
    const emptyLevel1 = 4 - (game?.cards.level1.board.length ?? 0);
    
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
                            <p className={styles.tierAmount}>{game?.cards.level3.deck.length}</p>
                        </li>
                        {(game) ? 
                            game.cards.level3.board.map((card)=> {
                                return <li key={card.id} className={styles.card} style={{
                                    backgroundImage: `url("/cards/${card.id}.png")`}}>
                                        <p className={styles.cardsPoints}>{card.points}</p>
                                        <div className={styles.cardsBonus}>
                                            <svg width='19' height='19' className={`gem--${card.resource}`}><use href='/sprite.svg#icon-Gemstone'/></svg>
                                        </div>
                                        <div className={styles.cardsPriceWrapper}>
                                            <ul className={styles.cardsPrice}>
                                                {(card.price.white > 0) && <li className={styles.white}><svg width='13' height='13' className='gem--white'><use href='/sprite.svg#icon-Gemstone'/></svg><p>{card.price.white}</p></li>}
                                                {(card.price.blue > 0) && <li className={styles.blue}><svg width='13' height='13' className='gem--blue'><use href='/sprite.svg#icon-Gemstone'/></svg><p>{card.price.blue}</p></li>}
                                                {(card.price.green > 0) && <li className={styles.green}><svg width='13' height='13' className='gem--green'><use href='/sprite.svg#icon-Gemstone'/></svg><p>{card.price.green}</p></li>}
                                                {(card.price.red > 0) && <li className={styles.red}><svg width='13' height='13' className='gem--red'><use href='/sprite.svg#icon-Gemstone'/></svg><p>{card.price.red}</p></li>}
                                                {(card.price.black > 0) && <li className={styles.black}><svg width='13' height='13' className='gem--black'><use href='/sprite.svg#icon-Gemstone'/></svg><p>{card.price.black}</p></li>}
                                            </ul>
                                             <button type='button' className={styles.plusIcon}><svg width='12' height='12'><use href='sprite.svg#icon-plus'/></svg></button>
                                        </div>
                                    </li>
                                }
                            )
                        
                        :
                            (
                                Array.from({ length: emptyLevel3 }).map((_, index) => (
                                    <li key={index} className={styles.emptyBox}></li>
                                ))
                        )}
                        
                    </ul>   
                </li>

                 <li className={styles.cardsLevel}>
                    <ul className={styles.level}>
                        <li className={styles.tier}>
                            <p className={styles.tierLabel}>Tier</p>
                            <p className={styles.tierNumber}>II</p>
                            <p className={styles.tierAmount}>{game?.cards.level2.deck.length}</p>
                        </li>
                        {(game) ? 
                            game.cards.level2.board.map((card)=> {
                                return <li key={card.id} className={styles.card} style={{
                                    backgroundImage: `url("/cards/${card.id}.png")`}}>
                                        <p className={styles.cardsPoints}>{card.points}</p>
                                        <div className={styles.cardsBonus}>
                                            <svg width='19' height='19' className={`gem--${card.resource}`}><use href='/sprite.svg#icon-Gemstone'/></svg>
                                        </div>
                                        <div className={styles.cardsPriceWrapper}>
                                            <ul className={styles.cardsPrice}>
                                                {(card.price.white > 0) && <li className={styles.white}><svg width='13' height='13' className='gem--white'><use href='/sprite.svg#icon-Gemstone'/></svg><p>{card.price.white}</p></li>}
                                                {(card.price.blue > 0) && <li className={styles.blue}><svg width='13' height='13' className='gem--blue'><use href='/sprite.svg#icon-Gemstone'/></svg><p>{card.price.blue}</p></li>}
                                                {(card.price.green > 0) && <li className={styles.green}><svg width='13' height='13' className='gem--green'><use href='/sprite.svg#icon-Gemstone'/></svg><p>{card.price.green}</p></li>}
                                                {(card.price.red > 0) && <li className={styles.red}><svg width='13' height='13' className='gem--red'><use href='/sprite.svg#icon-Gemstone'/></svg><p>{card.price.red}</p></li>}
                                                {(card.price.black > 0) && <li className={styles.black}><svg width='13' height='13' className='gem--black'><use href='/sprite.svg#icon-Gemstone'/></svg><p>{card.price.black}</p></li>}
                                            </ul>
                                             <button type='button' className={styles.plusIcon}><svg width='12' height='12'><use href='sprite.svg#icon-plus'/></svg></button>
                                        </div>
                                    </li>
                                }
                            )
                        
                        :
                            (
                                Array.from({ length: emptyLevel2 }).map((_, index) => (
                                    <li key={index} className={styles.emptyBox}></li>
                                ))
                        )}
                    </ul>   
                </li>

                 <li className={styles.cardsLevel}>
                    <ul className={styles.level}>
                        <li className={styles.tier}>
                            <p className={styles.tierLabel}>Tier</p>
                            <p className={styles.tierNumber}>I</p>
                            <p className={styles.tierAmount}>{game?.cards.level1.deck.length}</p>
                        </li>
                        {(game) ? 
                            game.cards.level1.board.map((card)=> {
                                return <li key={card.id} className={styles.card} style={{
                                    backgroundImage: `url("/cards/${card.id}.png")`}}>
                                        <p className={styles.cardsPoints}>{card.points}</p>
                                        <div className={styles.cardsBonus}>
                                            <svg width='19' height='19' className={`gem--${card.resource}`}><use href='/sprite.svg#icon-Gemstone'/></svg>
                                        </div>
                                        <div className={styles.cardsPriceWrapper}>
                                            <ul className={styles.cardsPrice}>
                                                {(card.price.white > 0) && <li className={styles.white}><svg width='13' height='13' className='gem--white'><use href='/sprite.svg#icon-Gemstone'/></svg><p>{card.price.white}</p></li>}
                                                {(card.price.blue > 0) && <li className={styles.blue}><svg width='13' height='13' className='gem--blue'><use href='/sprite.svg#icon-Gemstone'/></svg><p>{card.price.blue}</p></li>}
                                                {(card.price.green > 0) && <li className={styles.green}><svg width='13' height='13' className='gem--green'><use href='/sprite.svg#icon-Gemstone'/></svg><p>{card.price.green}</p></li>}
                                                {(card.price.red > 0) && <li className={styles.red}><svg width='13' height='13' className='gem--red'><use href='/sprite.svg#icon-Gemstone'/></svg><p>{card.price.red}</p></li>}
                                                {(card.price.black > 0) && <li className={styles.black}><svg width='13' height='13' className='gem--black'><use href='/sprite.svg#icon-Gemstone'/></svg><p>{card.price.black}</p></li>}
                                            </ul>
                                             <button type='button' className={styles.plusIcon}><svg width='12' height='12'><use href='sprite.svg#icon-plus'/></svg></button>
                                        </div>
                                    </li>
                                }
                            )
                        
                        :
                            (
                                Array.from({ length: emptyLevel1 }).map((_, index) => (
                                    <li key={index} className={styles.emptyBox}></li>
                                ))
                        )}
                    </ul>   
                </li>

            </ul>
            
        </div>
    )
}

export default DevelopmentCards;
'use client'

import styles from './YourReservedCards.module.css'
import { useGamesStore } from '@/stores/gameStore';
import { useCardStore } from '@/stores/cardStore';

const YourReservedCards = () => {
    const { game } = useGamesStore();
    const setCardId = useCardStore((state) => state.setCardId);
    const { cardId } = useCardStore();
    const isCardSelected = useCardStore((state) => state.isCardSelected);
    const setIsCardSelected = useCardStore((state) => state.setIsCardSelected);
    const resetCardSelected = useCardStore((state) => state.resetCardSelected);
    const isTierSelected = useCardStore((state) => state.isTierSelected);
    const setLevelSelected = useCardStore((state) => state.setLevelSelected);
    const setIsTierSelected = useCardStore((state) => state.setIsTierSelected);
    
    const you = game?.players.find(player => player.id === game.currentPlayerId);

    const emptyBoxAmount = 3 - (you?.reservedCards.length ?? 0);

    const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
        const cardIdTarget = Number(e.currentTarget.dataset.id);

        if (isTierSelected) {
            setIsTierSelected(false);
            setLevelSelected('');
        }

        if (isCardSelected && cardId === cardIdTarget) {
            setIsCardSelected(false);
            setCardId(0);
            return;
        }

        setCardId(cardIdTarget);
        setIsCardSelected(true);
    }

    return (
        <div className={styles.yourReservedCardsContainer}>
            
                <h2 className='sectionLabel'>Reserved cards</h2>
                <p className={styles.amount}>{`${you?.reservedCards.length ?? 0} / 3 slots`}</p>
            
            <div className={styles.headerWrapper}>

                <ul className={styles.list}>
               {you && (
                    <>
                        {you.reservedCards.map(card => (
                            <li
                                key={card.id}
                                className={`${styles.slot} ${(cardId === card.id) && styles.selectedCard}`}
                                style={{
                                    backgroundImage: `url("/cards/${card.id}.jpg")`
                                }}
                            >
                                <button type='button' onClick={handleClick} className={styles.cardBtn} data-id={card.id}>
                            <p className={styles.cardsPoints}><svg width='11' height='11'><use href='sprite.svg#icon-crown'/></svg>{card.points}</p>

                             <div className={styles.cardsBonus}>
                                <svg width="19" height="19">
                                    <use href="/sprite.svg#icon-Gemstone" />
                                </svg>
                            </div>

                            <ul className={styles.cardsPrice}>
                                {card.price.white > 0 && (
                                <li className={styles.white}>
                                    <svg width="13" height="13" className="gem--white">
                                        <use href="/sprite.svg#icon-Gemstone" />
                                    </svg>
                                    <p>{card.price.white}</p>
                                </li>
                                )}

                                {card.price.blue > 0 && (
                                <li className={styles.blue}>
                                    <svg width="13" height="13" className="gem--blue">
                                        <use href="/sprite.svg#icon-Gemstone" />
                                    </svg>
                                    <p>{card.price.blue}</p>
                                </li>
                                )}

                                {card.price.green > 0 && (
                                <li className={styles.green}>
                                    <svg width="13" height="13" className="gem--green">
                                        <use href="/sprite.svg#icon-Gemstone" />
                                    </svg>
                                    <p>{card.price.green}</p>
                                </li>
                                )}

                                {card.price.red > 0 && (
                                <li className={styles.red}>
                                    <svg width="13" height="13" className="gem--red">
                                        <use href="/sprite.svg#icon-Gemstone" />
                                    </svg>
                                    <p>{card.price.red}</p>
                                </li>
                                )}

                                {card.price.black > 0 && (
                                <li className={styles.black}>
                                    <svg width="13" height="13" className="gem--black">
                                        <use href="/sprite.svg#icon-Gemstone" />
                                    </svg>
                                    <p>{card.price.black}</p>
                                </li>
                                )}
                            </ul>
                            </button>
                        </li>
                    ))}

                    {Array.from({ length: emptyBoxAmount }).map((_, index) => (
                        <li key={`empty-${index}`} className={styles.emptyBox}></li>
                    ))}
                </>
                )}
            </ul>

            </div>
        </div>
    )
}

export default YourReservedCards;

 
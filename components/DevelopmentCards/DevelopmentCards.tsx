'use client'

import styles from './DevelopmentCards.module.css';
import { useGamesStore } from '@/stores/gameStore';
import { useCardStore } from '@/stores/cardStore';
import { useEffect } from 'react';

const DevelopmentCards = () => {
    const { game } = useGamesStore();
    const setCardId = useCardStore((state) => state.setCardId);
    const { cardId, levelSelected } = useCardStore();
    const isCardSelected = useCardStore((state) => state.isCardSelected);
    const setIsCardSelected = useCardStore((state) => state.setIsCardSelected);
    const resetCardSelected = useCardStore((state) => state.resetCardSelected);
    const isTierSelected = useCardStore((state) => state.isTierSelected);
    const setLevelSelected = useCardStore((state) => state.setLevelSelected);
    const setIsTierSelected = useCardStore((state) => state.setIsTierSelected);
    const setCardPoints = useCardStore((state) => state.setCardPoints);

    const emptyLevel3 = 4 - (game?.cards.level3.board.length ?? 0);
    const emptyLevel2 = 4 - (game?.cards.level2.board.length ?? 0);
    const emptyLevel1 = 4 - (game?.cards.level1.board.length ?? 0);

    useEffect(() => {
        resetCardSelected()
    }, [resetCardSelected]);

    const handleBackdropClick = (event: React.MouseEvent<HTMLDivElement>) => {
    if (event.target === event.currentTarget) {
        resetCardSelected();
    }
    };

    const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
        const cardIdTarget = Number(e.currentTarget.dataset.id);
        const cardPoints = Number(e.currentTarget.dataset.points);
        setCardPoints(cardPoints);

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

    const handleClickTier = (e: React.MouseEvent<HTMLButtonElement>) => {
        const level = e.currentTarget.dataset.level;

        if (isCardSelected) {
            setIsCardSelected(false);
            setCardId(0);
        }

        if (isTierSelected && level === levelSelected) {
            setIsTierSelected(false);
            setLevelSelected('');
            return;
        }

        setLevelSelected(level ?? '');
        setIsTierSelected(true);
    }

    return (
        <div className={styles.cardsContainer} onClick={handleBackdropClick}>
            <h2 className='sectionLabel'>Development cards</h2>
            <p className={`textInstruction ${styles.InstText}`}>Prestige at left · Gem bonus at right · Cost below</p>
            <ul className={styles.cards}>
                <li className={styles.cardsLevel}>
                    <ul className={styles.level}>
                        <li className={`${styles.tier} ${(levelSelected === 'level3') && styles.selectedTier}`}>
                            <button type='button' className={styles.tierBtn} data-level='level3' onClick={handleClickTier}> 
                                <p className={styles.tierLabel}>Tier</p>
                                <p className={styles.tierNumber}>III</p>
                                <p className={styles.tierAmount}>{game?.cards.level3.deck.length}</p>
                            </button>
                        </li>
                        {(game) ? 
                            game.cards.level3.board.map((card)=> {
                                return <li key={card.id} className={`${styles.card} ${(cardId === card.id) && styles.selectedCard}`} style={{
                                    backgroundImage: `url("/cards/${card.id}.jpg")`}}>
                                        <button className={styles.cardBtn} onClick={handleClick} type='button' data-id={card.id} data-points={card.points}>
                                        <p className={styles.cardsPoints}>
                                            <svg width='13' height='13'><use href='sprite.svg#icon-crown'/></svg>{card.points}</p>
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
                                            {(cardId === card.id) ? 
                                            <p className={styles.plusIcon}>Selected</p>
                                            :
                                            <svg width='12' height='12' className={styles.plusIcon}><use href='sprite.svg#icon-plus'/></svg>}
                                        </div>
                                        </button>
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
                        <li className={`${styles.tier} ${(levelSelected === 'level2') && styles.selectedTier}`} >
                            <button type='button' className={styles.tierBtn} data-level='level2' onClick={handleClickTier}> 
                            <p className={styles.tierLabel}>Tier</p>
                            <p className={styles.tierNumber}>II</p>
                            <p className={styles.tierAmount}>{game?.cards.level2.deck.length}</p>
                            </button>
                        </li>
                        {(game) ? 
                            game.cards.level2.board.map((card)=> {
                                return <li key={card.id} className={`${styles.card} ${(cardId === card.id) && styles.selectedCard}`} style={{
                                    backgroundImage: `url("/cards/${card.id}.jpg")`}}>
                                        <button className={styles.cardBtn} onClick={handleClick} type='button' data-id={card.id}>
                                        <p className={styles.cardsPoints}>
                                            <svg width='13' height='13'><use href='sprite.svg#icon-crown'/></svg>{card.points}</p>
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
                                            {(cardId === card.id) ? 
                                            <p className={styles.plusIcon}>Selected</p>
                                            :
                                            <svg width='12' height='12' className={styles.plusIcon}><use href='sprite.svg#icon-plus'/></svg>}
                                        </div>
                                        </button>
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
                        <li className={`${styles.tier} ${styles.lastLevelTier} ${(levelSelected === 'level1') && styles.selectedTier}`} >
                            <button type='button' className={styles.tierBtn} data-level='level1' onClick={handleClickTier}> 
                                <p className={styles.tierLabel}>Tier</p>
                                <p className={styles.tierNumber}>I</p>
                                <p className={styles.tierAmount}>{game?.cards.level1.deck.length}</p>
                            </button>
                        </li>
                        {(game) ? 
                            game.cards.level1.board.map((card)=> {
                                return <li key={card.id} className={`${styles.card} ${styles.lastLevelCard} ${(cardId === card.id) && styles.selectedCardLastLevel}`} style={{
                                    backgroundImage: `url("/cards/${card.id}.jpg")`}}>
                                        <button className={styles.cardBtn} onClick={handleClick} type='button' data-id={card.id}>
                                        <p className={styles.cardsPoints}>
                                            <svg width='13' height='13'><use href='sprite.svg#icon-crown'/></svg>{card.points}</p>
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
                                            {(cardId === card.id) ? 
                                            <p className={styles.plusIcon}>Selected</p>
                                            :
                                            <svg width='12' height='12' className={styles.plusIcon}><use href='sprite.svg#icon-plus'/></svg>}
                                        </div>
                                        </button>
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
'use client'

import styles from './Opponent.module.css';
import Image from 'next/image';
import { useGamesStore } from '@/stores/gameStore';

const Opponent = () => {
    const { game } = useGamesStore();
    const opponent = game?.players.find((player)=> player.id !== game.currentPlayerId)

    return (
        <div className={styles.opponentContainer}>
            <div className={styles.headWrapper}>
                <Image src='/opponentPortrait.png' width={44} height={44} alt='Portrait'/>
                <div className={styles.opponentInfo}>
                    <p className={styles.name}>{opponent?.name}</p>
                    <p className={styles.cards}>{`Opponent · ${opponent?.developmentCards.length ?? 0} developments`}</p>            
                </div>
                <div className={styles.points}>
                    <svg width='13' height='13'><use href='sprite.svg#icon-crown'/></svg>
                    <p>{opponent?.points ?? 0}</p>
                </div>
            </div>
            <ul className={styles.opponentTokens}>
                <li className={styles.white}><svg width='16' height='16' className='gem--white'><use href='/sprite.svg#icon-Gemstone'/></svg><p>{opponent?.tokens.white ?? 0}</p></li>
                <li className={styles.blue}><svg width='16' height='16' className='gem--blue'><use href='/sprite.svg#icon-Gemstone'/></svg><p>{opponent?.tokens.blue ?? 0}</p></li>
                <li className={styles.green}><svg width='16' height='16' className='gem--green'><use href='/sprite.svg#icon-Gemstone'/></svg><p>{opponent?.tokens.green ?? 0}</p></li>
                <li className={styles.red}><svg width='16' height='16' className='gem--red'><use href='/sprite.svg#icon-Gemstone'/></svg><p>{opponent?.tokens.red ?? 0}</p></li>
                <li className={styles.black}><svg width='16' height='16' className='gem--black'><use href='/sprite.svg#icon-Gemstone'/></svg><p>{opponent?.tokens.black ?? 0}</p></li>
                <li className={styles.gold}><svg width='16' height='16' className='gem--gold'><use href='/sprite.svg#icon-Gemstone'/></svg><p>{opponent?.tokens.gold ?? 0}</p></li>
            </ul>
            <p className={styles.reservedCards}>{`${opponent?.reservedCards.length ?? 0} reserved card · ${opponent?.totalTokens ?? 0} / 10 tokens`}</p>
            
            <ul className={styles.opponentBonuses}>
                <li className={styles.text}>Bonuses</li>
                <li className={styles.white}><svg width='13' height='13' className='gem--white'><use href='/sprite.svg#icon-Gemstone'/></svg><p>{opponent?.resources.white ?? 0}</p></li>
                <li className={styles.blue}><svg width='13' height='13' className='gem--blue'><use href='/sprite.svg#icon-Gemstone'/></svg><p>{opponent?.resources.blue ?? 0}</p></li>
                <li className={styles.green}><svg width='13' height='13' className='gem--green'><use href='/sprite.svg#icon-Gemstone'/></svg><p>{opponent?.resources.green ?? 0}</p></li>
                <li className={styles.red}><svg width='13' height='13' className='gem--red'><use href='/sprite.svg#icon-Gemstone'/></svg><p>{opponent?.resources.red ?? 0}</p></li>
                <li className={styles.black}><svg width='13' height='13' className='gem--black'><use href='/sprite.svg#icon-Gemstone'/></svg><p>{opponent?.resources.black ?? 0}</p></li>
            </ul>
        </div>
    )
}

export default Opponent;
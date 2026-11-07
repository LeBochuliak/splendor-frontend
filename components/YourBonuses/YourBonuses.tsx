'use client'

import styles from './YourBonuses.module.css'
import { useGamesStore } from '@/stores/gameStore';

const YourBonuses = () => {
    const { game } = useGamesStore();
    const you = game?.players.find(player => player.id === game.currentPlayerId);

    return (
        <div className={styles.bonusesContainer}>
            <div className={styles.developmentBonuses}> 
                <h2 className='sectionLabel'>Development bonuses</h2>
                <ul className={styles.bonusesList}>
                    <li><svg width='18' height='18' className='gem--white'><use href='sprite.svg#icon-Gemstone'/></svg>{you?.resources.white ?? 0}</li>
                    <li><svg width='18' height='18' className='gem--blue'><use href='sprite.svg#icon-Gemstone'/></svg>{you?.resources.blue ?? 0}</li>
                    <li><svg width='18' height='18' className='gem--green'><use href='sprite.svg#icon-Gemstone'/></svg>{you?.resources.green ?? 0}</li>
                    <li><svg width='18' height='18' className='gem--red'><use href='sprite.svg#icon-Gemstone'/></svg>{you?.resources.red ?? 0}</li>
                    <li><svg width='18' height='18' className='gem--black'><use href='sprite.svg#icon-Gemstone'/></svg>{you?.resources.black ?? 0}</li>
                </ul>
                <p className={styles.text}>Permanent discounts on every purchase.</p>
            </div>
        </div>
    )
}

export default YourBonuses;
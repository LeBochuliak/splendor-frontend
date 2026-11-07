'use client'

import styles from './YourGemCollection.module.css'
import { useGamesStore } from '@/stores/gameStore'; 

const GemColection = () => {
    const { game } = useGamesStore();
    const you = game?.players.find(player => player.id === game.currentPlayerId);
    
 return (
    <div className={styles.gemColectionContainer}>
        <div className={styles.gemCollection}>
            <h2 className='sectionLabel'>Gem collection</h2>
            <p className={styles.tokensAmount}>{you?.totalTokens ?? 0} / 10 tokens</p>
            <ul className={styles.gemBar}>
                <li><svg width='42' height='42' className='gem--white'><use href='sprite.svg#icon-Gem-token'/></svg>{you?.tokens.white ?? 0}</li>
                <li><svg width='42' height='42' className='gem--blue'><use href='sprite.svg#icon-Gem-token'/></svg>{you?.tokens.blue ?? 0}</li>
                <li><svg width='42' height='42' className='gem--green'><use href='sprite.svg#icon-Gem-token'/></svg>{you?.tokens.green ?? 0}</li>
                <li><svg width='42' height='42' className='gem--red'><use href='sprite.svg#icon-Gem-token'/></svg>{you?.tokens.red ?? 0}</li>
                <li><svg width='42' height='42' className='gem--black'><use href='sprite.svg#icon-Gem-token'/></svg>{you?.tokens.black ?? 0}</li>
                <li><svg width='42' height='42' className='gem--gold'><use href='sprite.svg#icon-Gem-token'/></svg>{you?.tokens.gold ?? 0}</li>
            </ul>
            <p className={styles.text}>If you have more than 10 tokens at the end of your turn, you must return tokens to the bank until you have 10 remaining.</p>
        </div>
    </div>
 )
}

export default GemColection;
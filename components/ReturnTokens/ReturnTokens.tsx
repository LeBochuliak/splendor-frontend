'use client'

import styles from './ReturnTokens.module.css'
import { useGamesStore } from '@/stores/gameStore'; 
import { useState } from 'react';
import type { Token } from '@/types/tokens';
import { useMutation } from '@tanstack/react-query';
import axios from 'axios';
import type { Game } from '@/types/game';
import { useActionStore } from '@/stores/actionStore';

const ReturnTokens = () => {
    const { game } = useGamesStore();
    const you = game?.players.find(player => player.id === game.currentPlayerId);
    const totalTokensToReturn = (you?.totalTokens ?? 0) - 10;
    const [selectedTokens, setSelectedTokens] = useState<Token[]>([])
    const setGame = useGamesStore((state) => state.setGame);
    const addAction = useActionStore(state => state.addAction);

    const handleClickSelect = (e: React.MouseEvent<HTMLButtonElement>) => {
        const color = e.currentTarget.dataset.color as Token | undefined;
        if (selectedTokens.length === totalTokensToReturn) return;
        if (color && you && (you?.tokens[color] > 0)) {
            setSelectedTokens(prev => [...prev, color]);
        }
    }

    const handleClickCancel = (e: React.MouseEvent<HTMLButtonElement>) => {
        const color = e.currentTarget.dataset.color as Token || undefined;
        if (color) {
            setSelectedTokens(prev => {
                const index = prev.lastIndexOf(color);
                if (index === -1) return prev;
                return prev.filter((_, i) => i !== index);
            });
        }
    }
    
    const mutation = useMutation({
        mutationFn: async (tokens: Token[]) => {
            const res = await axios.patch<Game>('https://splendor-backend-mbjw.onrender.com/action/tokens/returnTokens', {'playerId': game?.currentPlayerId, 'tokens': tokens});
            
            return {
            game: res.data
            }
        },
        onSuccess: (data) => {
            setGame(data.game);
            addAction({
                id: crypto.randomUUID(),
                playerName: you?.name || 'Player',
                action: `return gems: ${selectedTokens.join(', ')}`,
                cardPoints: 0
            });
            setSelectedTokens([]);

        },
        onError: (error) => {
            console.error("Failed to take tokens", error);
            setSelectedTokens([]);
          }

    })
    const handleConfirm = () => {
    if (selectedTokens.length === totalTokensToReturn) {
        mutation.mutate(selectedTokens);
    }
    };

    if (totalTokensToReturn < 0) return;

 return (
    <div className={styles.gemColectionContainer}>
        <div className={styles.gemCollection}>
            <h2 className={`sectionLabel ${styles.label}`}>Gem collection</h2>
            <p className={styles.textDescription}>{`${you?.name}, you must return ${totalTokensToReturn} tokens`}</p>
            
            <ul className={styles.tokensToReturnList}>
                {selectedTokens.map((color, index) => (
                    <li key={`${color}-${index}`}>
                        <button type='button' data-color={color} onClick={handleClickCancel}>
                            <svg
                                width="42"
                                height="42"
                                className={`gem gem--${color} gemSelected`}
                            >
                                <use href="sprite.svg#icon-Gem-token" />
                            </svg>
                        </button>
                    </li>
                ))}

                {Array.from({ length: (totalTokensToReturn - selectedTokens.length) }).map((_, index) => (
                    <li key={`empty-${index}`}>
                        <svg width="42" height="42">
                            <use href="sprite.svg#icon-Next-gem" />
                        </svg>
                    </li>
                ))}
            </ul>
            
            <ul className={styles.gemBar}>
                <li><button className={styles.gemBtn} type='button' onClick={handleClickSelect} data-color='white'><svg width='42' height='42' className='gem--white'><use href='sprite.svg#icon-Gem-token'/></svg></button>{you?.tokens.white ?? 0}</li>
                <li><button className={styles.gemBtn} type='button' onClick={handleClickSelect} data-color='blue'><svg width='42' height='42' className='gem--blue'><use href='sprite.svg#icon-Gem-token'/></svg></button>{you?.tokens.blue ?? 0}</li>
                <li><button className={styles.gemBtn} type='button' onClick={handleClickSelect} data-color='green'><svg width='42' height='42' className='gem--green'><use href='sprite.svg#icon-Gem-token'/></svg></button>{you?.tokens.green ?? 0}</li>
                <li><button className={styles.gemBtn} type='button' onClick={handleClickSelect} data-color='red'><svg width='42' height='42' className='gem--red'><use href='sprite.svg#icon-Gem-token'/></svg></button>{you?.tokens.red ?? 0}</li>
                <li><button className={styles.gemBtn} type='button' onClick={handleClickSelect} data-color='black'><svg width='42' height='42' className='gem--black'><use href='sprite.svg#icon-Gem-token'/></svg></button>{you?.tokens.black ?? 0}</li>
            </ul>
            
        </div>

            <button type='button' className={styles.confirmBtn} onClick={handleConfirm}><svg width='13' height='13'><use href='sprite.svg#icon-check'/></svg>Confirm selection</button>
    </div>
 )
}

export default ReturnTokens;


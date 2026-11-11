'use client'

import styles from './TurnBox.module.css';
import { useGamesStore } from '@/stores/gameStore';
import { useSelectedTokensStore } from '@/stores/selectedTokensStore'
import { useMutation } from '@tanstack/react-query';
import axios from 'axios'
import type { Game } from '@/types/game';


const TurnBox = () => {
    const { game } = useGamesStore();
    const { selectedTokens, newUpdateGame } = useSelectedTokensStore();
    const updateGame = useGamesStore((state) => state.updateGame);
    const setGame = useGamesStore((state) => state.setGame)
    const resetSelectedTokens = useSelectedTokensStore((state) => state.resetSelectedTokens);


    const totalSelectedTokens = Object.values(selectedTokens).reduce((acc, value) => 
        acc + value, 0);
    
    const selectedColors = Object.entries(selectedTokens)
                                 .filter(([color, value]) => value > 0);
    const selectedColorsDoubled = selectedColors.filter((color) => color[1] > 1);
    
    const selectedColorsArray = selectedColors.flatMap(([color, value]) =>
        value > 1 ? [color, color] : [color]
    );

    const textDescription = selectedColorsDoubled[0]
        ? 'Confirm your selection'
        : selectedColors.length === 1
            ? 'Choose one or two more gems from the bank.'
            : selectedColors.length === 2
                ? 'Choose one more gem from the bank.'
                : selectedColors.length === 3 && 'Confirm your selection';

    const mutation = useMutation({
        mutationFn: async (selectedColorsArray: string[]) => {
            const GameRes = await axios.patch<Game>('https://splendor-backend-mbjw.onrender.com/action/tokens/takeTokens', {'playerId': game?.currentPlayerId, 'tokens': selectedColorsArray});
            
            return {
            game: GameRes.data
            };
        },
        onSuccess: (data) => {
            setGame(data.game);
        },
        onError: (error) => {
            console.error("Failed to take tokens", error);
        }

    })
    const handleConfirm = () => {
        mutation.mutate(selectedColorsArray);
        resetSelectedTokens();

    };
    
    const handleClear = () =>{
        if (game) {
            updateGame({
                tokens: {
                    white: game.tokens.white + newUpdateGame.tokens.white,
                    blue: game.tokens.blue + newUpdateGame.tokens.blue,
                    green: game.tokens.green + newUpdateGame.tokens.green,
                    red: game.tokens.red + newUpdateGame.tokens.red,
                    black: game.tokens.black + newUpdateGame.tokens.black,
                    gold: game.tokens.gold + newUpdateGame.tokens.gold,
            }
        })
        }
        resetSelectedTokens();
    }
        

    return (
        <div className={styles.turnBoxContainer}>
            <h2 className='sectionLabel'>Your Turn</h2>
            <h3 className={styles.titleTurn}>Your next move.</h3>
            <p className='textInstruction'>Take 3 different gems, or 2 of one kind when at least 4 are available.</p>
            <ul className={styles.choosenTokens}>
                {(selectedColors[0]) ? 
                    <li>
                        <svg
                            width="42"
                            height="42"
                            className={`gem gem--${selectedColors[0][0]} gemSelected`}
                        >
                            <use href="sprite.svg#icon-Gem-token" />
                        </svg>
                    </li>
                    :
                    <li><svg width='42' height='42'><use href='sprite.svg#icon-Next-gem'/></svg></li>
                }
            
                {(selectedColors[1] || selectedColorsDoubled[0]) ? 
                    <li>
                        <svg
                            width="42"
                            height="42"
                            className={`gem gem--${selectedColors[1]?.[0]} gem--${selectedColorsDoubled[0]?.[0]} gemSelected`}
                        >
                            <use href="sprite.svg#icon-Gem-token" />
                        </svg>
                    </li>
                    :
                    <li><svg width='42' height='42'><use href='sprite.svg#icon-Next-gem'/></svg></li>
                }
                {(selectedColors[2]) ? 
                    <li>
                        <svg
                            width="42"
                            height="42"
                            className={`gem gem--${selectedColors[2][0]} gemSelected`}
                        >
                            <use href="sprite.svg#icon-Gem-token" />
                        </svg>
                    </li>
                    :
                    <li className={`${selectedColorsDoubled[0] ? 'visually-hidden' : ''}`}><svg width='42' height='42'><use href='sprite.svg#icon-Next-gem'/></svg></li>
                }
            
                <li className={styles.amount}>{`${totalSelectedTokens} / ${selectedColorsDoubled[0] ? '2' : '3'}`}</li>
            </ul>
            <p className={styles.textMove}>{textDescription ? textDescription : 'Choose two or three more gems from the bank.'}</p>
            <button type='button' className={styles.confirmBtn} onClick={handleConfirm}><svg width='16' height='16'><use href='sprite.svg#icon-check'/></svg>Confirm selection</button>
            <button type='button' className={styles.clearBtn} onClick={handleClear}>Clear selection</button>
        </div>
    )
}

export default TurnBox;
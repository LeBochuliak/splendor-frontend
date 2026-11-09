'use client'

import styles from './TokenBank.module.css';
import { useGamesStore } from '@/stores/gameStore'
import { useSelectedTokensStore } from '@/stores/selectedTokensStore'
import { useState } from 'react'
import type { Token } from '@/types/tokens'

const TokenBank = () => {
  const { game } = useGamesStore();
  const [isActive, setIsActive] = useState<Record<Token, boolean>>({white: false, blue: false, green: false, red: false, black: false, gold: false});
  const updateSelectedTokens = useSelectedTokensStore(state => state.updateSelectedTokens);
  const { selectedTokens } = useSelectedTokensStore();
  

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    const color = e.currentTarget.dataset.color as Token;

    if (!color || !game) return;

    if (!isActive[color] && color) {
      setIsActive(prev => ({
          ...prev,
          [color]: true,
      }));
      updateSelectedTokens({ [color]: selectedTokens[color] + 1});
      
      return;
    }

    if (isActive[color] && color && (selectedTokens[color] === 1) && game && (game.tokens[color] >= 4)) {
      updateSelectedTokens({ [color]: selectedTokens[color] + 1,})
      
      return;
    } 
    
    setIsActive(prev => ({
      ...prev,
      [color]: false,
    }));
    updateSelectedTokens({
      [color]: 0,
    });
  }

  return (
    <div className={styles.tokenBankContainer}>
      <h2 className="sectionLabel">Token bank</h2>
      <p className="textInstruction">Select gems to add to your collection.</p>
      <ul>
        <li className={styles.gemsWrapper}>
          <button type='button' onClick={handleClick} data-color="white">
            <svg
            width="53"
            height="53"
            className={`gem gem--white ${styles.gem} ${
              isActive['white'] ? 'gemSelected' : ''
            }`}
          >
            <use href="sprite.svg#icon-Gem-token" />
          </svg>
          </button>
          <p className={styles.amount}>{game ? game.tokens.white : 0}{}</p>
          <svg width="15" height="15" className="visually-hidden">
            <use href="sprite.svg#icon-circle-check" />
          </svg>
          <p className={styles.gemsName}>Diamond</p>
        </li>
        <li className={styles.gemsWrapper}>
          <button type='button' onClick={()=> console.log(selectedTokens)} data-color="blue">
            <svg width="53" height="53" className={`gem gem--blue ${styles.gem}`}>
              <use href="sprite.svg#icon-Gem-token" />
            </svg>
          </button>
          
          <p className={styles.amount}>{game ? game.tokens.blue : 0}</p>
          <svg width="15" height="15" className="visually-hidden">
            <use href="sprite.svg#icon-circle-check" />
          </svg>
          <p className={styles.gemsName}>Sapphire</p>
        </li>
        <li className={styles.gemsWrapper}>
          <svg
            width="53"
            height="53"
            className={`gem gem--green ${styles.gem}`}
          >
            <use href="sprite.svg#icon-Gem-token" />
          </svg>
          <p className={styles.amount}>{game ? game.tokens.green : 0}</p>
          <svg width="15" height="15" className="visually-hidden">
            <use href="sprite.svg#icon-circle-check" />
          </svg>
          <p className={styles.gemsName}>Emerald</p>
        </li>
        <li className={styles.gemsWrapper}>
          <svg width="53" height="53" className={`gem gem--red ${styles.gem}`}>
            <use href="sprite.svg#icon-Gem-token" />
          </svg>
          <p className={styles.amount}>{game ? game.tokens.red : 0}</p>
          <svg width="15" height="15" className="visually-hidden">
            <use href="sprite.svg#icon-circle-check" />
          </svg>
          <p className={styles.gemsName}>Ruby</p>
        </li>
        <li className={styles.gemsWrapper}>
          <svg
            width="53"
            height="53"
            className={`gem gem--black ${styles.gem}`}
          >
            <use href="sprite.svg#icon-Gem-token" />
          </svg>
          <p className={styles.amount}>{game ? game.tokens.black : 0}</p>
          <svg width="15" height="15" className="visually-hidden">
            <use href="sprite.svg#icon-circle-check" />
          </svg>
          <p className={styles.gemsName}>Onyx</p>
        </li>
        <li className={styles.gemsWrapper}>
          <svg width="53" height="53" className={`gem gem--gold ${styles.gem}`}>
            <use href="sprite.svg#icon-Gem-token" />
          </svg>
          <p className={styles.amount}>{game ? game.tokens.gold : 0}</p>
          <svg width="15" height="15" className="visually-hidden">
            <use href="sprite.svg#icon-circle-check" />
          </svg>
          <p className={styles.gemsName}>Gold joker</p>
        </li>
      </ul>
      <p className="textInstruction">Reserve a card to receive a gold joker.</p>
    </div>
  );
};

export default TokenBank;

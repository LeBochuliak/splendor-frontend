'use client'

import styles from './TokenBank.module.css';
import { useGamesStore } from '@/stores/gameStore'
import { useSelectedTokensStore } from '@/stores/selectedTokensStore'
import type { Token } from '@/types/tokens'
import { useEffect } from 'react';

const TokenBank = () => {
  const { game } = useGamesStore();
  const updateSelectedTokens = useSelectedTokensStore(state => state.updateSelectedTokens);
  const updateIsActive = useSelectedTokensStore(state => state.updateIsActive);
  const updateGame = useGamesStore((state) => state.updateGame);
  const updateNewUpdateGame = useSelectedTokensStore(
  (state) => state.updateNewUpdateGame
  );
  const { selectedTokens, isActive, newUpdateGame } = useSelectedTokensStore();
  const resetSelectedTokens = useSelectedTokensStore((state) => state.resetSelectedTokens);

  useEffect(() => {
    resetSelectedTokens();
  }, [resetSelectedTokens]);

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    const color = e.currentTarget.dataset.color as Token;
    const hasTwoTokens = Object.values(newUpdateGame.tokens).some(value => value >= 2);
    const totalSelectedTokens = Object.values(newUpdateGame.tokens).reduce(
      (acc, value) => acc + value,
      0
    );
    
    if (!color || !game) return;

    if (!isActive[color] && color && game.tokens[color] >= 1 && !hasTwoTokens && totalSelectedTokens < 3) {
      updateSelectedTokens({ [color]: selectedTokens[color] + 1});
      updateIsActive({ [color]: true});
      updateGame({
        tokens: {
          ...game.tokens,
          [color]: game.tokens[color] - 1
        }
      })
      updateNewUpdateGame({
        status: true,
        tokens: {
          [color]: 1
        },
      });
      return;
    }

    if (isActive[color] && color && (selectedTokens[color] === 1) && newUpdateGame.status && game && (game.tokens[color] >= 3) && !hasTwoTokens && totalSelectedTokens === 1) {
      updateSelectedTokens({ [color]: selectedTokens[color] + 1,})
      updateNewUpdateGame({
        status: false,
        tokens: {
          [color]: 2
        },
      });
      updateGame({
        tokens: {
          ...game.tokens,
          [color]: game.tokens[color] - 1
        }
      })
      return;
    } 

    if (isActive[color] && color && (selectedTokens[color] === 2)) {
      updateSelectedTokens({ [color]: selectedTokens[color] - 1,})
      updateNewUpdateGame({
        status: false,
        tokens: {
          [color]: 1
        },
      });
      updateGame({
        tokens: {
          ...game.tokens,
          [color]: game.tokens[color] + 1
        }
      })
      return;
    }

    updateNewUpdateGame({
        status: false,
        tokens: {
          [color]: 0
        },
      });
    updateGame({
        tokens: {
          ...game.tokens,
          [color]: game.tokens[color] + newUpdateGame.tokens[color]
        }
      })
    updateIsActive({ [color]: false});
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
          <p className={`${isActive['white'] ? styles.selected : ''} ${styles.amount}`}>{game ? game.tokens.white : 0}{}</p>
          <svg width="19" height="19" className={`${isActive['white'] ? '' : 'visually-hidden'}`}>
            {selectedTokens['white'] === 1 && <use href="sprite.svg#icon-circle-check" />}
            {selectedTokens['white'] === 2 && <use href="sprite.svg#icon-circle-check-double" />}
          </svg>
          
          <p className={`${isActive['white'] ? styles.selected : ''} ${styles.gemsName}`}>Diamond</p>
        </li>

        <li className={styles.gemsWrapper}>
          <button type='button' onClick={handleClick} data-color="blue">
            <svg
            width="53"
            height="53"
            className={`gem gem--blue ${styles.gem} ${
              isActive['blue'] ? 'gemSelected' : ''
            }`}
          >
            <use href="sprite.svg#icon-Gem-token" />
          </svg>
          </button>
          <p className={`${isActive['blue'] ? styles.selected : ''} ${styles.amount}`}>{game ? game.tokens.blue : 0}{}</p>
          <svg width="19" height="19" className={`${isActive['blue'] ? '' : 'visually-hidden'}`}>
            {selectedTokens['blue'] === 1 && <use href="sprite.svg#icon-circle-check" />}
            {selectedTokens['blue'] === 2 && <use href="sprite.svg#icon-circle-check-double" />}
          </svg>
          
          <p className={`${isActive['blue'] ? styles.selected : ''} ${styles.gemsName}`}>Sapphire</p>
        </li>

        <li className={styles.gemsWrapper}>
          <button type='button' onClick={handleClick} data-color="green">
            <svg
            width="53"
            height="53"
            className={`gem gem--green ${styles.gem} ${
              isActive['green'] ? 'gemSelected' : ''
            }`}
          >
            <use href="sprite.svg#icon-Gem-token" />
          </svg>
          </button>
          <p className={`${isActive['green'] ? styles.selected : ''} ${styles.amount}`}>{game ? game.tokens.green : 0}{}</p>
          <svg width="19" height="19" className={`${isActive['green'] ? '' : 'visually-hidden'}`}>
            {selectedTokens['green'] === 1 && <use href="sprite.svg#icon-circle-check" />}
            {selectedTokens['green'] === 2 && <use href="sprite.svg#icon-circle-check-double" />}
          </svg>
          
          <p className={`${isActive['green'] ? styles.selected : ''} ${styles.gemsName}`}>Emerald</p>
        </li>

        <li className={styles.gemsWrapper}>
          <button type='button' onClick={handleClick} data-color="red">
            <svg
            width="53"
            height="53"
            className={`gem gem--red ${styles.gem} ${
              isActive['red'] ? 'gemSelected' : ''
            }`}
          >
            <use href="sprite.svg#icon-Gem-token" />
          </svg>
          </button>
          <p className={`${isActive['red'] ? styles.selected : ''} ${styles.amount}`}>{game ? game.tokens.red : 0}{}</p>
          <svg width="19" height="19" className={`${isActive['red'] ? '' : 'visually-hidden'}`}>
            {selectedTokens['red'] === 1 && <use href="sprite.svg#icon-circle-check" />}
            {selectedTokens['red'] === 2 && <use href="sprite.svg#icon-circle-check-double" />}
          </svg>
          
          <p className={`${isActive['red'] ? styles.selected : ''} ${styles.gemsName}`}>Ruby</p>
        </li>

        <li className={styles.gemsWrapper}>
          <button type='button' onClick={handleClick} data-color="black">
            <svg
            width="53"
            height="53"
            className={`gem gem--black ${styles.gem} ${
              isActive['black'] ? 'gemSelected' : ''
            }`}
          >
            <use href="sprite.svg#icon-Gem-token" />
          </svg>
          </button>
          <p className={`${isActive['black'] ? styles.selected : ''} ${styles.amount}`}>{game ? game.tokens.black : 0}{}</p>
          <svg width="19" height="19" className={`${isActive['black'] ? '' : 'visually-hidden'}`}>
            {selectedTokens['black'] === 1 && <use href="sprite.svg#icon-circle-check" />}
            {selectedTokens['black'] === 2 && <use href="sprite.svg#icon-circle-check-double" />}
          </svg>
          
          <p className={`${isActive['black'] ? styles.selected : ''} ${styles.gemsName}`}>Onyx</p>
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

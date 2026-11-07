'use client'

import styles from './TokenBank.module.css';
import { useGamesStore } from '@/stores/gameStore'

const TokenBank = () => {
  const { game } = useGamesStore();

  return (
    <div className={styles.tokenBankContainer}>
      <h2 className="sectionLabel">Token bank</h2>
      <p className="textInstruction">Select gems to add to your collection.</p>
      <ul>
        <li className={styles.gemsWrapper}>
          <svg
            width="53"
            height="53"
            className={`gem gem--white ${styles.gem}`}
          >
            <use href="sprite.svg#icon-Gem-token" />
          </svg>
          <p className={styles.amount}>{game ? game.tokens.white : 0}{}</p>
          <svg width="15" height="15" className="visually-hidden">
            <use href="sprite.svg#icon-circle-check" />
          </svg>
          <p className={styles.gemsName}>Diamond</p>
        </li>
        <li className={styles.gemsWrapper}>
          <svg width="53" height="53" className={`gem gem--blue ${styles.gem}`}>
            <use href="sprite.svg#icon-Gem-token" />
          </svg>
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

'use client'

import styles from './Header.module.css';
import Link from 'next/link';
import Image from 'next/image';
import clsx from 'clsx';
import axios from 'axios'
import { useGamesStore } from '@/stores/gameStore'

const Header = () => {
  const { game, setGame } = useGamesStore();

  const resetGame = async () => {
    const res = await axios.delete('https://splendor-backend-mbjw.onrender.com/game');
    console.log(res);
    
    setGame(res.data.game);

    return res.data;
  }

  return (
    <header className={styles.header}>
      <div className={clsx('container', styles.headerContainer)}>
        <button type="button" className={styles.menu}>
          <svg width="20" height="20">
            <use href="/sprite.svg#icon-menu" />
          </svg>
        </button>
        {/* <div className={styles.gameType}>
          <svg width="16" height="16">
            <use href="/sprite.svg#icon-users" />
          </svg>
          <p>Duel &#183; 2 players</p>
        </div> */}
        {/* <p className={styles.privatTable}>Private table</p> */}
        <Link href='/' className={styles.logo}>
          <Image
            src="/Brand.png"
            width={212}
            height={52}
            alt="Logo Splendor"
            preload={true}
            
         /> 
        </Link>
        
        {/* <p className={styles.round}>
          <span>&#183;</span> Round 1
        </p> */}
        <button className={styles.howToPlay} type="button">
          How to play
        </button>
        <button type="button" onClick={()=>console.log(game)}>
          <svg width="20" height="20" className={styles.volume}>
            <use href="/sprite.svg#icon-volume-2" />
          </svg>
        </button>
        <button type="button" onClick={()=>resetGame()}>
          <svg width="20" height="20" className={styles.settings}>
            <use href="/sprite.svg#icon-settings" />
          </svg>
        </button>
      </div>
    </header>
  );
};

export default Header;

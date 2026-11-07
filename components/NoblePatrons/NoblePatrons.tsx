'use client'

import styles from './NoblePatrons.module.css';
import Image from 'next/image';
import { useGamesStore } from '@/stores/gameStore';
import { noblesInfo } from '@/public/nobles/nobles';

const NoblePatrons = () => {
    const { game } = useGamesStore();
    const emptyNoblesBoxes = 3 - (game?.nobles.length ?? 0);

  return (
    <div className={styles.noblesContainer}>
      <h2 className="sectionLabel">Noble Patrons</h2>
      <p className={`textInstruction ${styles.noblesText}`}>Earn their favor with permanent bonuses</p>
      <ul className={styles.noblesList}>
        {(game) ? 
            game.nobles.map((noble)=> {
                const info = noblesInfo.find((patron) => patron.id === noble.id)
                return <li key={noble.id} className={styles.nobleCard}>
                    <Image src={`/nobles/${noble.id}.jpg`} width={76} height={96} alt='Patron portrait'className={styles.portrait}/>
            
                    <div className={styles.infoWrapper}>
                        <p className={styles.patronTitle}>{info?.title}</p>
                        <p className={styles.patronName}>{info?.name}</p>
                        <ul className={styles.RequiredBonuses}>
                            {(noble.requirement.white > 0) && <li className={styles.bonus}><svg width='15' height='15' className='gem--white'><use href='/sprite.svg#icon-Gemstone'/></svg><p>{noble.requirement.white}</p></li>}
                            {(noble.requirement.blue > 0) && <li className={styles.bonus}><svg width='15' height='15' className='gem--blue'><use href='/sprite.svg#icon-Gemstone'/></svg><p>{noble.requirement.blue}</p></li>}
                            {(noble.requirement.green > 0) && <li className={styles.bonus}><svg width='15' height='15' className='gem--green'><use href='/sprite.svg#icon-Gemstone'/></svg><p>{noble.requirement.green}</p></li>}
                            {(noble.requirement.red > 0) && <li className={styles.bonus}><svg width='15' height='15' className='gem--red'><use href='/sprite.svg#icon-Gemstone'/></svg><p>{noble.requirement.red}</p></li>}
                            {(noble.requirement.black > 0) && <li className={styles.bonus}><svg width='15' height='15' className='gem--black'><use href='/sprite.svg#icon-Gemstone'/></svg><p>{noble.requirement.black}</p></li>}
                        </ul>
                
                    </div>
            
                    <div className={styles.prestigeWrapper}>
                        <svg width='15' height='15'><use href='/sprite.svg#icon-crown'/></svg> 
                        <p className={styles.noblePrestige}>{noble.points}</p>
                    </div>
            
                </li> 
            })
            :
            (
                Array.from({ length: emptyNoblesBoxes }).map((_, index) => (
                    <li key={index} className={styles.emptyBox}></li>
                ))
            )}
            

      </ul>
    </div>
  );
};

export default NoblePatrons;
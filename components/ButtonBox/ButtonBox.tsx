'use client'

import styles from './ButtonBox.module.css';
import { useGamesStore } from '@/stores/gameStore';
import BuyCardBtn from '../BuyCardBtn/BuyCardBtn';
import ReserveBtn from '../ReserveCard.Btn/ReserveCardBtn';

const ButtonBox = () => {
return (
        <div className={styles.turnBoxContainer}>
            <h2 className='sectionLabel'>Your Turn</h2>
            <h3 className={styles.titleTurn}>Your next move.</h3>
            <p className='textInstruction'>Take gems from the bank, buy a card from the table or your reserved cards, or reserve a card from the table or deck.</p>
            <div className={styles.buttonWrapper}>
                <BuyCardBtn />
                <ReserveBtn />
            </div>
        </div>
    )
}

export default ButtonBox;


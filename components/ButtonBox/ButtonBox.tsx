'use client'

import styles from './ButtonBox.module.css';
import BuyCardBtn from '../BuyCardBtn/BuyCardBtn';
import ReserveBtn from '../ReserveCardBtn/ReserveCardBtn';
import type { Action } from '@/types/action';

interface ButtonBoxProps {
  action?: Action | null;
}

const ButtonBox = ({ action }: ButtonBoxProps) => {
return (
        <div className={styles.turnBoxContainer}>
            <h2 className='sectionLabel'>Your Turn</h2>
            <h3 className={styles.titleTurn}>Your next move.</h3>
            <p className='textInstruction'>Take gems from the bank, buy a card from the table or your reserved cards, or reserve a card from the table or deck.</p>
            <div className={styles.buttonWrapper}>
                <BuyCardBtn action={action}/>
                <ReserveBtn action={action}/>
            </div>
        </div>
    )
}

export default ButtonBox;


import styles from './Winner.module.css';
import type { Player } from '@/types/player';
import Link from 'next/link';


interface WinnerProps {
    winner: Player;
    points: number;
}

const Winner = ({ winner, points }: WinnerProps) => {
    return (
            <div className={styles.winnerBox}>
                <div className={styles.trophy}>🏆</div>

                <p className={styles.subtitle}>GAME OVER</p>

                <h2 className={styles.title}>
                    We have a winner!
                </h2>

                <p className={styles.winnerName}>
                    {winner.name}
                </p>

                <div className={styles.score}>
                    <span>{points}</span>
                    <p>Prestige points</p>
                </div>
                <Link className='actionBtn' href='/'>
                    Home
                </Link>
            </div>
    );
};

export default Winner;
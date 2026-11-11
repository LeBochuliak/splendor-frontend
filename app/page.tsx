'use client'
import styles from './page.module.css';
import { useState } from "react";
import { useMutation } from '@tanstack/react-query';
import axios from 'axios'
import { useRouter } from 'next/navigation';
import { useGamesStore } from '@/stores/gameStore';
import type { Game } from "@/types/game"

export default function Home() {
  const [firstName, setFirstName] = useState("");
  const [secondName, setSecondName] = useState("");
  const { setGame } = useGamesStore();

  const router = useRouter();

  const mutation = useMutation({
    mutationFn: async (newPlayers: string[]) => {

        const gameRes = await axios.post<Game>(
            'https://splendor-backend-mbjw.onrender.com/game'
        );
        const playersRes = await axios.post<Game>(
            'https://splendor-backend-mbjw.onrender.com/players',
            { players: newPlayers }
        );
       
        return {
            game: playersRes.data
        };
    },

    onSuccess: (data) => {
        setGame(data.game);
        console.log(data);
        
        router.push('/game-duel');
    },

    onError: (error) => {
        console.error("Failed to create game", error);
    },
});

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const newPlayers = [firstName.trim(), secondName.trim()];
    
    mutation.mutate(newPlayers);
  }

  return (
    <div className='page'>
      <main className='main'>
        <div className={`container ${styles.homeContainer}`}>
          <div className={styles.subtitleContainer}>
            <h2 className={styles.subtitle}>A seat at the merchant’s table.</h2>
            <p className={styles.subtitleDescription}>
              Gather your fellow merchants. A new pursuit of prestige awaits.
            </p>
          </div>
          
          <div className={styles.imageWrapper}>
            <p className={styles.textAccent}><svg width='16' height='16'><use href='sprite.svg#icon-Gemstone'/></svg>The art of the trade</p>
            <h1 className={styles.title}>From a handful of gems,<br />
                to a legacy of splendor.  
            </h1>
            <p className={styles.titleDescription}>Collect precious gems, build a thriving trade, and win the favor of noble patrons. <br />
              The most prestigious merchant prevails.</p>
          </div>

          <div className={styles.formWrapper}>
            <h3 className={styles.formTitle}>Prepare your table</h3>
            <p className={styles.formSutitle}>Add 2 players to begin. Play together on this device.</p>

            <form onSubmit={handleSubmit} className={styles.addPlayerForm}>
              <label htmlFor="firstPlayerName">First player name <span>*</span></label>
              <input
                id="firstPlayerName"
                name="name"
                type="text"
                placeholder="Name"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                minLength={2}
                maxLength={20}
                required
              />

              <label htmlFor="secondPlayerName">Second player name <span>*</span></label>
              <input
                id="secondPlayerName"
                name="name"
                type="text"
                placeholder="Name"
                value={secondName}
                onChange={(e) => setSecondName(e.target.value)}
                minLength={2}
                maxLength={20}
                required
              />

              <p className='textInstruction'>The name other merchants will see. 2–20 characters.</p>
      
              <div className={styles.btnWrapper}>
                <button type="submit" disabled={mutation.isPending} className={styles.formAddBtn}>
                  {mutation.isPending ? (
                    "Creating..."
                    ) : (
                    <>
                      <svg width="12" height="12" className={styles.plusIcon}>
                        <use href="sprite.svg#icon-plus" />
                      </svg>
                      Add Players
                    </>
                    )}
                </button>
              </div>
              {mutation.isError && <p className={styles.error}>Something went wrong. Try again.</p>} 
            </form>
          </div>
        </div>
      </main>
    </div>
  );
}

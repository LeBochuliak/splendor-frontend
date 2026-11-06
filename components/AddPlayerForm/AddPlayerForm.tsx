import styles from './AddPlayerForm.module.css'
import { useState } from "react";
import { useMutation } from '@tanstack/react-query';
import axios from 'axios'

interface AddPlayerFormProps {
  onClose: () => void
}
const AddPlayerForm =  ({ onClose } : AddPlayerFormProps)=> {
    const [firstName, setFirstName] = useState("");
    const [secondName, setSecondName] = useState("");

    const mutation = useMutation({
        mutationFn: async (newPlayers: string[] )  => {
            const res = await axios.post('https://splendor-backend-mbjw.onrender.com/players', { players: newPlayers });
            return res.data;
        },
        onSuccess: (data) => {
            console.log("Player added successfully", data);
            onClose();
        },

        onError: (error) => {
            console.error("Failed to add player", error);
        },
    });

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const newPlayers = [firstName.trim(), secondName.trim()];
        
        mutation.mutate(newPlayers)
  };

    return (
      <div className={styles.addPlayerContainer}>
        <p className={styles.addPlayerlabel}>A new merchant</p>
        <h2 className={styles.addPlayertitle}>Add Player</h2>
        <p className='textInstruction'>Create a merchant and take your place at the table.</p>

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
            <button type='button' onClick= {onClose} className={styles.formCancelBtn}>Cancel</button>
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
    );
}

export default AddPlayerForm;
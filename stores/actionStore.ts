import { create } from 'zustand';

type GameAction = {
    id: string;
    playerName: string;
    action: string;
    cardPoints: number;
    round?: number;
};

interface ActionStore  {
    history: GameAction[];
    addAction: (action: GameAction) => void;
    resetActionStore: () => void;
};

export const useActionStore = create<ActionStore>((set) => ({
    history: [
        {id: '1',
        playerName: 'Welcome',
        action: 'to the game',
        cardPoints: 0,
    }],

    addAction: (newAction) =>
        set((state) => ({
            history: [newAction, ...state.history]
        })),

    resetActionStore: () => {
        set({
            history: [
                {id: '1',
                playerName: 'Welcome',
                action: 'to the game',
                cardPoints: 0,
                }
            ]
        })
    }
}));
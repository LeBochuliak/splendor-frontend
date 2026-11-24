import { create } from 'zustand';
import type { Game } from '../types/game';
import { persist, createJSONStorage } from 'zustand/middleware';


interface GamesStore {
  game: Game | null;
  setGame: (game: Game | null) => void;
  updateGame: (updates: Partial<Game>) => void;
}

export const useGamesStore = create<GamesStore>()(
  persist(
    (set) => ({
      game: null,

      setGame: (game) => set({ game }),

      updateGame: (updates) =>
        set((state) => ({
          game: state.game
            ? { ...state.game, ...updates }
            : null,
        })),
    }),
    {
      name: 'splendor-game',
      storage: createJSONStorage(() => localStorage),
      partialize: (state) => ({
        game: state.game,
      }),
    }
  )
);

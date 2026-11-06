import { create } from 'zustand';
import type { Game } from '../types/game'


interface GamesStore {
  game: Game | null;
  setGame: (game: Game) => void;
  updateGame: (updates: Partial<Game>) => void;
}

export const useGamesStore = create<GamesStore>()((set) => ({
  game: null,

  setGame: (game) => set({ game }),

  updateGame: (updates) =>
    set((state) => ({
      game: state.game
        ? { ...state.game, ...updates }
        : null,
    })),
}));

// const updateGame = useGamesStore((state) => state.updateGame);

// updateGame({
//   status: "playing",
//   currentPlayerId: "123",
// });
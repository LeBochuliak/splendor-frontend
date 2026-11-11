import { create } from 'zustand';
import type { Token } from '@/types/tokens';

interface SelectedTokensStore {
  selectedTokens: Record<Token, number>;
  isActive: Record<Token, boolean>;

  newUpdateGame: {
    status: boolean;
    tokens: Record<Token, number>;
  };

  updateSelectedTokens: (updates: Partial<Record<Token, number>>) => void;
  updateIsActive: (updates: Partial<Record<Token, boolean>>) => void;
  updateNewUpdateGame: (
    updates: Partial<{
      status: boolean;
      tokens: Partial<Record<Token, number>>;
    }>
  ) => void;

  resetSelectedTokens: () => void;
}

 export const useSelectedTokensStore = create<SelectedTokensStore>()((set) => ({
    selectedTokens: {
      white: 0,
      blue: 0,
      green: 0,
      red: 0,
      black: 0,
      gold: 0,
  },
 
  isActive: { 
    white: false, 
    blue: false, 
    green: false, 
    red: false, 
    black: false, 
    gold: false
  },

  newUpdateGame: {
    status: false, 
    tokens: { 
      white: 0, 
      blue: 0, 
      green: 0, 
      red: 0, 
      black: 0, 
      gold: 0
    }},

  updateSelectedTokens: (updates) =>
      set((state) => ({
        selectedTokens: {
        ...state.selectedTokens,
        ...updates,
      },
    })),

    updateIsActive: (updates) =>
      set((state) => ({
        isActive: {
        ...state.isActive,
        ...updates,
      },
    })),

   updateNewUpdateGame: (updates) =>
      set((state) => ({
        newUpdateGame: {
          ...state.newUpdateGame,
          ...updates,
        tokens: {
          ...state.newUpdateGame.tokens,
          ...updates.tokens,
      },
      },
    })),

    resetSelectedTokens: () => set({
      selectedTokens: {
        white: 0,
        blue: 0,
        green: 0,
        red: 0,
        black: 0,
        gold: 0,
      },
      isActive: {
        white: false,
        blue: false,
        green: false,
        red: false,
        black: false,
        gold: false,
      },
      newUpdateGame: {
        status: false,
        tokens: {
          white: 0,
          blue: 0,
          green: 0,
          red: 0,
          black: 0,
          gold: 0,
        },
      },
    }),
 }))

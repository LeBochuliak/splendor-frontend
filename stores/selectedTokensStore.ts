import { create } from 'zustand';
import type { Token } from '@/types/tokens';

interface SelectedTokensStore {
   selectedTokens: Record<Token, number>;

     updateSelectedTokens: (updates: Partial<Record<Token, number>>) => void;
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
 
    updateSelectedTokens: (updates) =>
      set((state) => ({
        selectedTokens: {
        ...state.selectedTokens,
        ...updates,
      },
    })),
 }))

import { create } from 'zustand';
import type { Card } from '@/types/card'

interface CardStore {
    card: Card | null;
    cardId: number;
    cardPoints: number;
    isCardSelected: boolean;
    isTierSelected: boolean;
    levelSelected: string;

    setCard: (card: Card) => void;
    setCardId: (cardId: number) => void;
    setCardPoints: (points: number) => void;
    setIsCardSelected: (arg: boolean) => void;
    setLevelSelected: (level: string) => void;
    setIsTierSelected: (arg: boolean) => void;
    resetCardSelected: () => void;
}

export const useCardStore = create<CardStore>()((set) => ({
  card: null,
  cardId: 0,
  cardPoints: 0,
  isCardSelected: false,
  isTierSelected: false,
  levelSelected: '',

  setCard: (card) => set({ card }),

  setCardId: (cardId) => set({ cardId }),

  setCardPoints: (cardPoints) => set({ cardPoints }),

  setIsCardSelected: (isSelected) => set({ isCardSelected: isSelected }),

  setIsTierSelected: (isSelected) => set({ isTierSelected: isSelected }),

  setLevelSelected: (level) => set({ levelSelected: level }),

  resetCardSelected: () => set({
    card: null,
    cardId: 0,
    isCardSelected: false,
    isTierSelected: false,
    levelSelected: '',
    })
}));
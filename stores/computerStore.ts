import { create } from 'zustand';

interface ComputerStore {
    computerPlayerId: string | null;
    isComputer: boolean;

    setComputerPlayerId: (computerPlayerId: string | null) => void;
    setIsComputer: (isComputer: boolean) => void;
}
export const useComputerStore = create<ComputerStore>()((set) => ({
    computerPlayerId: null,
    isComputer: false,

    setComputerPlayerId: (computerPlayerId) => set({ computerPlayerId }),
    setIsComputer: (isComputer) => set({ isComputer }),
}));
import { create } from 'zustand';

interface ModalStore  {
    isModalOpened: boolean;
    setIsModalOpened: (isModalOpened: boolean) => void;
};

export const useModalStore = create<ModalStore>((set) => ({
    isModalOpened: false,

    setIsModalOpened: (isModalOpened) => set({ isModalOpened }),
}));
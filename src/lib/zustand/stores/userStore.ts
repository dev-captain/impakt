import { StateCreator } from 'zustand';

export interface UserSlice {
  bears: number;
  addBear: () => void;
}

export const createUserSlice: StateCreator<UserSlice> = (set) => ({
  bears: 0,
  addBear: () => set((state) => ({ bears: state.bears + 1 })),
});

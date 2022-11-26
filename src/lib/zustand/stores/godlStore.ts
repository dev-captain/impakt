import { StateCreator } from 'zustand';

export interface GodlSlice {
  godlBalanceScore: number;
  setGodlBalanceScore: (newGodlBalanceScore: number) => void;
  setClearGodl: () => void;
}
const initialGodlSlice = { godlBalanceScore: 0 };

export const godlSlice: StateCreator<GodlSlice> = (set) => ({
  ...initialGodlSlice,
  setGodlBalanceScore: (newGodlBalanceScore) =>
    set(() => ({ godlBalanceScore: newGodlBalanceScore })),
  setClearGodl: () => set(initialGodlSlice),
});

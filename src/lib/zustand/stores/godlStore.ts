import { StateCreator } from 'zustand';

export interface GodlSlice {
  godlBalanceScore: number;
  setGodlBalanceScore: (newGodlBalanceScore: number) => void;
}

export const godlSlice: StateCreator<GodlSlice> = (set) => ({
  godlBalanceScore: 0,
  setGodlBalanceScore: (newGodlBalanceScore) =>
    set(() => ({ godlBalanceScore: newGodlBalanceScore })),
});

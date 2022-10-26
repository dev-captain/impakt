import { StateCreator } from 'zustand';

export interface KoinSlice {
  koinBalanceScore: number;
  setKoinBalanceScore: (newGodlBalanceScore: number) => void;
}

export const koinSlice: StateCreator<KoinSlice> = (set) => ({
  koinBalanceScore: 0,
  setKoinBalanceScore: (newGodlBalanceScore) =>
    set(() => ({ koinBalanceScore: newGodlBalanceScore })),
});

import { StateCreator } from 'zustand';

export interface KoinSlice {
  koinBalanceScore: number;
  setKoinBalanceScore: (newGodlBalanceScore: number) => void;
  setClearKoin: () => void;
}
const initialKoinSlice = { koinBalanceScore: 0 };

export const koinSlice: StateCreator<KoinSlice> = (set) => ({
  ...initialKoinSlice,
  setKoinBalanceScore: (newGodlBalanceScore) =>
    set(() => ({ koinBalanceScore: newGodlBalanceScore })),
  setClearKoin: () => set(initialKoinSlice),
});

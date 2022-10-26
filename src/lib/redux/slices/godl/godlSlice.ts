import { createSlice } from '@reduxjs/toolkit';

interface GodlInitialI {
  isLoading: boolean;
  godlBalanceScore: number;
}

const godlInitialState: GodlInitialI = {
  isLoading: false,
  godlBalanceScore: 0,
};

const godlSlice = createSlice({
  name: 'godl',
  initialState: godlInitialState as GodlInitialI,
  reducers: {
    cleanGodlState(state: GodlInitialI) {
      state.godlBalanceScore = 0;
      state.isLoading = false;
    },
  },
});

export const { cleanGodlState } = godlSlice.actions;
// eslint-disable-next-line import/prefer-default-export
export default godlSlice.reducer;

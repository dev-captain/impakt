import { createSlice } from '@reduxjs/toolkit';

interface KoinInitialI {
  isLoading: boolean;
  koinBalanceScore: number;
}

const koinInitialState: KoinInitialI = {
  isLoading: false,
  koinBalanceScore: 0,
};

const koinSlice = createSlice({
  name: 'koin',
  initialState: koinInitialState as KoinInitialI,
  reducers: {
    cleanGodlState(state: KoinInitialI) {
      state.koinBalanceScore = 0;
      state.isLoading = false;
    },
  },
});

export const { cleanGodlState } = koinSlice.actions;
// eslint-disable-next-line import/prefer-default-export
export default koinSlice.reducer;

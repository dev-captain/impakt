import { createSlice } from '@reduxjs/toolkit';

import { fetchKoinBalanceScore } from './actions/fetchKoinBalanceScore';

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
  extraReducers: (builder) => {
    builder
      .addCase(fetchKoinBalanceScore.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchKoinBalanceScore.fulfilled, (state, action) => {
        state.koinBalanceScore = action.payload;
        state.isLoading = false;
      })
      .addCase(fetchKoinBalanceScore.rejected, (state) => {
        state.isLoading = false;
      });
  },
});

export const { cleanGodlState } = koinSlice.actions;
// eslint-disable-next-line import/prefer-default-export
export default koinSlice.reducer;

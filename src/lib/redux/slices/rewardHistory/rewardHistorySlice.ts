import { createSlice } from '@reduxjs/toolkit';
import { fetchRewardHistory } from './actions/fetchRewardHistory';

interface rewardHistoryInitialI {
  isRewardHistoryLoading: boolean;
  rewardHistoryState: any;
}

const rewardHistoryInitialState: rewardHistoryInitialI = {
  isRewardHistoryLoading: false,
  rewardHistoryState: [],
};

const rewardHistorySlice = createSlice({
  name: 'fitness',
  initialState: rewardHistoryInitialState as rewardHistoryInitialI,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchRewardHistory.pending, (state) => {
        state.rewardHistoryState = [];
      })
      .addCase(fetchRewardHistory.fulfilled, (state, action) => {
        state.rewardHistoryState = action.payload;
      })
      .addCase(fetchRewardHistory.rejected, (state) => {
        state.rewardHistoryState = [];
      });
  },
});

// eslint-disable-next-line import/prefer-default-export
export default rewardHistorySlice.reducer;

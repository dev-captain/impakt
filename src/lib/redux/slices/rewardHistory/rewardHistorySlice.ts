import { createSlice } from '@reduxjs/toolkit';
import { fetchRewardHistory } from './actions/fetchRewardHistory';

interface rewardHistoryInitialI {
  isRewardHistoryLoading: boolean;
  rewardHistoryState: { purpose: string; timestamp: Date; value: number }[];
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
        state.isRewardHistoryLoading = true;
      })
      .addCase(fetchRewardHistory.fulfilled, (state, action) => {
        state.rewardHistoryState = action.payload;

        state.isRewardHistoryLoading = false;
      })
      .addCase(fetchRewardHistory.rejected, (state) => {
        state.rewardHistoryState = [];
        state.isRewardHistoryLoading = false;
      });
  },
});

// eslint-disable-next-line import/prefer-default-export
export default rewardHistorySlice.reducer;

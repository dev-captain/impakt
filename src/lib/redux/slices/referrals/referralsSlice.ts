import { ReferreesOfReferrerRes } from '@impakt-dev/api-client-168-merge';
import { createSlice } from '@reduxjs/toolkit';
import { fetchReferrals } from './actions/fetchReferrals';

interface ReferralsInitialI {
  referrals: ReferreesOfReferrerRes;
  isReferralsLoading: boolean;
}

const referralsInitialState: ReferralsInitialI = {
  referrals: { referrees: [], referrerId: 0 },
  isReferralsLoading: false,
};

const referralsSlice = createSlice({
  name: 'referrals',
  initialState: referralsInitialState as ReferralsInitialI,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchReferrals.pending, (state) => {
        state.isReferralsLoading = true;
      })
      .addCase(fetchReferrals.fulfilled, (state, action) => {
        state.referrals = action.payload;
        state.isReferralsLoading = false;
      })
      .addCase(fetchReferrals.rejected, (state) => {
        state.isReferralsLoading = false;
      });
  },
});

// eslint-disable-next-line import/prefer-default-export
export default referralsSlice.reducer;

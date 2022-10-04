import {
  ChallengeAttemptStatsRes,
  GetChallengeLikesRes,
  GetChallengeRes,
} from '@impakt-dev/api-client';
import { createSlice } from '@reduxjs/toolkit';
import { fetchAvailableChallengesForGroup } from './actions/fetchAvailableChallengesForGroup';

interface ChallengesInitialI {
  availableGroupChallenges: {
    challenge: GetChallengeRes;
    attempts: ChallengeAttemptStatsRes;
    likes: GetChallengeLikesRes;
  }[];
  isMyChallengesLoading: boolean;
}

const calendarInitialState: ChallengesInitialI = {
  availableGroupChallenges: [],
  isMyChallengesLoading: false,
};

const challengesSlice = createSlice({
  name: 'challenges',
  initialState: calendarInitialState as ChallengesInitialI,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchAvailableChallengesForGroup.pending, (state) => {
      state.isMyChallengesLoading = true;
    });
    builder.addCase(fetchAvailableChallengesForGroup.fulfilled, (state, action) => {
      state.availableGroupChallenges = action.payload;
      state.isMyChallengesLoading = false;
    });
    builder.addCase(fetchAvailableChallengesForGroup.rejected, (state) => {
      state.isMyChallengesLoading = false;
    });
  },
});

// eslint-disable-next-line import/prefer-default-export
export default challengesSlice.reducer;

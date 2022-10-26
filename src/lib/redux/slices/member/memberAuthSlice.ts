import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { GetUserRes } from '@impakt-dev/api-client';

import { requestAccessToken } from './actions/requestAccessToken';
import { fetchMember } from './actions/fetchMember';
import { updateMember } from './actions/updateMember';

interface MemberAuthInitialI {
  member: GetUserRes | null;
  isLogin: boolean;
  isLoading: boolean;
  requestAccessTokenAttemptCount: number;
}

const memberAuthInitialState: MemberAuthInitialI = {
  member: null,
  isLoading: false,
  isLogin: false,
  requestAccessTokenAttemptCount: 0,
};

const memberAuthSlice = createSlice({
  name: 'member-auth',
  initialState: memberAuthInitialState as MemberAuthInitialI,
  reducers: {
    cleanMemberAuthState(state: MemberAuthInitialI) {
      if (state.member || state.isLoading) {
        state.isLoading = memberAuthInitialState.isLoading;
        state.member = memberAuthInitialState.member;
        state.isLogin = memberAuthInitialState.isLogin;
      }
    },
    setIsMemberAuthLoading(state: MemberAuthInitialI, action: PayloadAction<boolean>) {
      state.isLoading = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(requestAccessToken.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(requestAccessToken.fulfilled, (state, action) => {
        state.isLoading = false;
        state.requestAccessTokenAttemptCount += 1;
        state.member = action.payload;
      })
      .addCase(requestAccessToken.rejected, (state) => {
        state.isLoading = false;
      });

    builder
      .addCase(fetchMember.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchMember.fulfilled, (state, action) => {
        state.isLoading = false;
        state.member = action.payload;
      })
      .addCase(fetchMember.rejected, (state) => {
        state.isLoading = false;
      });

    builder
      .addCase(updateMember.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(updateMember.fulfilled, (state, action) => {
        state.member = action.payload;
        state.isLoading = false;
      })
      .addCase(updateMember.rejected, (state) => {
        state.isLoading = false;
      });
  },
});

export const { cleanMemberAuthState, setIsMemberAuthLoading } = memberAuthSlice.actions;
// eslint-disable-next-line import/prefer-default-export
export default memberAuthSlice.reducer;

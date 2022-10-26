import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { GetUserRes } from '@impakt-dev/api-client';

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
});

export const { cleanMemberAuthState, setIsMemberAuthLoading } = memberAuthSlice.actions;
// eslint-disable-next-line import/prefer-default-export
export default memberAuthSlice.reducer;

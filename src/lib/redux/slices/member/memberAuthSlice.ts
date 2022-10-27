import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { GetUserRes } from '@impakt-dev/api-client';

import { signInMember } from './actions/signInMember';
import { signOutMember } from './actions/signOutMember';
import { forgotPassword } from './actions/forgotPassword';
import { requestVerification } from './actions/requestVerification';
import { requestAccessToken } from './actions/requestAccessToken';
import { signUpMember } from './actions/signUpMember';
import { fetchMember } from './actions/fetchMember';
import { updateMember } from './actions/updateMember';
import { fetchMembers } from './actions/fetchMembers';

interface MemberAuthInitialI {
  member: GetUserRes | null;
  memberSearch: GetUserRes[];
  isLogin: boolean;
  isLoading: boolean;
  requestAccessTokenAttemptCount: number;
}

const memberAuthInitialState: MemberAuthInitialI = {
  member: null,
  memberSearch: [],
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
      .addCase(signUpMember.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(signUpMember.fulfilled, (state) => {
        state.isLoading = false;
      })
      .addCase(signUpMember.rejected, (state) => {
        state.isLoading = false;
      });

    builder
      .addCase(signInMember.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(signInMember.fulfilled, (state, action) => {
        state.isLoading = false;
        state.member = action.payload;
        state.isLogin = true;
      })
      .addCase(signInMember.rejected, (state) => {
        state.isLoading = false;
        state.member = null;
        state.isLogin = false;
      });

    builder
      .addCase(signOutMember.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(signOutMember.fulfilled, (state) => {
        state.isLoading = false;
        state.member = null;
        state.isLogin = false;
      })
      .addCase(signOutMember.rejected, (state) => {
        state.isLoading = false;
      });

    builder
      .addCase(forgotPassword.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(forgotPassword.fulfilled, (state) => {
        state.isLoading = false;
      })
      .addCase(forgotPassword.rejected, (state) => {
        state.isLoading = false;
      });

    builder
      .addCase(requestVerification.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(requestVerification.fulfilled, (state) => {
        state.isLoading = false;
      })
      .addCase(requestVerification.rejected, (state) => {
        state.isLoading = false;
      });

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

    builder
      .addCase(fetchMembers.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchMembers.fulfilled, (state, action) => {
        state.isLoading = false;
        state.memberSearch = action.payload;
      })
      .addCase(fetchMembers.rejected, (state) => {
        state.isLoading = false;
      });
  },
});

export const { cleanMemberAuthState, setIsMemberAuthLoading } = memberAuthSlice.actions;
// eslint-disable-next-line import/prefer-default-export
export default memberAuthSlice.reducer;

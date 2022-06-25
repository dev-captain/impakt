import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { GetUserRes } from '@impakt-dev/api-client';

import { signInMember } from './actions/signInMember';
import { signOutMember } from './actions/signOutMember';
import { forgotPassword } from './actions/forgotPassword';
import { requestVerification } from './actions/requestVerification';

interface MemberAuthInitialI {
  member: GetUserRes | null;
  isLogin: boolean;
  isLoading: boolean;
}

const memberAuthInitialState: MemberAuthInitialI = {
  member: null,
  isLoading: false,
  isLogin: false,
};

const memberAuthSlice = createSlice({
  name: 'member-auth',
  initialState: memberAuthInitialState as MemberAuthInitialI,
  reducers: {
    updateAuthMember(state: MemberAuthInitialI, action: PayloadAction<GetUserRes>) {
      state.member = action.payload;
    },
  },
  extraReducers: (builder) => {
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
  },
});

export const { updateAuthMember } = memberAuthSlice.actions;
// eslint-disable-next-line import/prefer-default-export
export default memberAuthSlice.reducer;

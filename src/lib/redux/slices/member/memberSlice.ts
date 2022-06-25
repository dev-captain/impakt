import { GetUserRes } from '@impakt-dev/api-client';
import { createSlice } from '@reduxjs/toolkit';

import { signUpMember } from './actions/signUpMember';
import { updateMember } from './actions/updateMember';
import { fetchMembers } from './actions/fetchMembers';

interface MemberInitialI {
  isLoading: boolean;
  members: GetUserRes[];
}

const memberInitialState: MemberInitialI = {
  isLoading: false,
  members: [],
};

const memberSlice = createSlice({
  name: 'member',
  initialState: memberInitialState as MemberInitialI,
  reducers: {
    cleanMembersState(state: MemberInitialI) {
      if (state.members.length > 0 || state.isLoading) {
        state.members = [];
        state.isLoading = false;
      }
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchMembers.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchMembers.fulfilled, (state, action) => {
        state.members = action.payload;
        state.isLoading = false;
      })
      .addCase(fetchMembers.rejected, (state) => {
        state.isLoading = false;
      });

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
      .addCase(updateMember.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(updateMember.fulfilled, (state) => {
        state.isLoading = false;
      })
      .addCase(updateMember.rejected, (state) => {
        state.isLoading = false;
      });
  },
});

export const { cleanMembersState } = memberSlice.actions;
// eslint-disable-next-line import/prefer-default-export
export default memberSlice.reducer;

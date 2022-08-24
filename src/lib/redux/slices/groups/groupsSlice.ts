import { GetUserRes } from '@impakt-dev/api-client';
import { createSlice } from '@reduxjs/toolkit';
import { createGroup } from './actions/createGroup';
import { deleteGroup } from './actions/deleteGroup';
import { fetchGroupDetailById } from './actions/fetchGroupDetailById';
import { fetchMembersOfGroup } from './actions/fetchMembersOfGroup';
import { fetchMyGroups } from './actions/fetchMyGroups';
import { joinGroup } from './actions/joinGroup';
import { updateGroup } from './actions/updateGroup';

export type GetGroupRes = {
  id: number;
  friendlyName: string;
  ownerId: number;
  createdAt: string;
  updatedAt: string;
  conversationId?: string;
  coverImageUrl?: string;
  memberCount?: number;
};

interface GroupsInitialI {
  isLoading: boolean;
  myGroups: GetGroupRes[];
  activeGroup: GetGroupRes | null;
  membersOfGroup: GetUserRes[];
}

const godlInitialState: GroupsInitialI = {
  isLoading: false,
  myGroups: [],
  activeGroup: null,
  membersOfGroup: [],
};

const groupsSlice = createSlice({
  name: 'groups',
  initialState: godlInitialState as GroupsInitialI,
  reducers: {
    cleanActiveGroup(state: GroupsInitialI) {
      state.activeGroup = null;
      state.membersOfGroup = [];
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(createGroup.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(createGroup.fulfilled, (state) => {
        state.isLoading = false;
      })
      .addCase(createGroup.rejected, (state) => {
        state.isLoading = false;
      });

    builder
      .addCase(joinGroup.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(joinGroup.fulfilled, (state) => {
        state.isLoading = false;
      })
      .addCase(joinGroup.rejected, (state) => {
        state.isLoading = false;
      });

    builder
      .addCase(fetchMyGroups.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchMyGroups.fulfilled, (state, action) => {
        state.isLoading = false;
        state.myGroups = action.payload;
      })
      .addCase(fetchMyGroups.rejected, (state) => {
        state.isLoading = false;
      });

    builder
      .addCase(fetchGroupDetailById.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchGroupDetailById.fulfilled, (state, action) => {
        state.isLoading = false;
        state.activeGroup = action.payload;
      })
      .addCase(fetchGroupDetailById.rejected, (state) => {
        state.isLoading = false;
      });

    builder
      .addCase(deleteGroup.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(deleteGroup.fulfilled, (state) => {
        state.isLoading = false;
      })
      .addCase(deleteGroup.rejected, (state) => {
        state.isLoading = false;
      });

    builder
      .addCase(updateGroup.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(updateGroup.fulfilled, (state, action) => {
        state.isLoading = false;
        state.activeGroup = action.payload;
      })
      .addCase(updateGroup.rejected, (state) => {
        state.isLoading = false;
      });

    builder.addCase(fetchMembersOfGroup.fulfilled, (state, action) => {
      state.membersOfGroup = action.payload;
    });
  },
});

export const { cleanActiveGroup } = groupsSlice.actions;
// eslint-disable-next-line import/prefer-default-export
export default groupsSlice.reducer;

import { GetUserRes } from '@impakt-dev/api-client';
import { createSlice } from '@reduxjs/toolkit';
import { sendGroupRequestToJoin } from './actions/sendGroupRequestToJoin';
import { createGroup } from './actions/createGroup';
import { deleteGroup } from './actions/deleteGroup';
import { fetchGroupDetailById } from './actions/fetchGroupDetailById';
import { fetchGroupRequests } from './actions/fetchGroupRequests';
import { fetchGroups } from './actions/fetchGroups';
import { fetchMembersOfGroup } from './actions/fetchMembersOfGroup';
import { fetchMyGroups } from './actions/fetchMyGroups';
import { inviteMember } from './actions/inviteMember';
import { joinGroup } from './actions/joinGroup';
import { updateGroup } from './actions/updateGroup';
import { answerToGroupRequest } from './actions/answerToGroupRequest';

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

export type GetGroupRequestResV2 = {
  id: number;
  createdAt: string;
  fromUserId: number;
  status: string;
  Group: GetGroupRes;
  from: GetUserRes;
};

interface GroupsInitialI {
  isLoading: boolean;
  myGroups: GetGroupRes[];
  activeGroup: GetGroupRes | null;
  membersOfGroup: GetUserRes[];
  groupRequests: GetGroupRequestResV2[];
  exploreGroups: GetGroupRes[];
}

const godlInitialState: GroupsInitialI = {
  isLoading: false,
  myGroups: [],
  activeGroup: null,
  membersOfGroup: [],
  groupRequests: [],
  exploreGroups: [],
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
      .addCase(fetchGroups.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchGroups.fulfilled, (state, action) => {
        state.isLoading = false;
        state.exploreGroups = action.payload;
      })
      .addCase(fetchGroups.rejected, (state) => {
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

    builder
      .addCase(inviteMember.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(inviteMember.fulfilled, (state) => {
        state.isLoading = false;
      })
      .addCase(inviteMember.rejected, (state) => {
        state.isLoading = false;
      });

    builder
      .addCase(fetchGroupRequests.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchGroupRequests.fulfilled, (state, action) => {
        state.isLoading = false;
        state.groupRequests = action.payload;
      })
      .addCase(fetchGroupRequests.rejected, (state) => {
        state.isLoading = false;
      });

    builder
      .addCase(sendGroupRequestToJoin.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(sendGroupRequestToJoin.fulfilled, (state) => {
        state.isLoading = false;
      })
      .addCase(sendGroupRequestToJoin.rejected, (state) => {
        state.isLoading = false;
      });

    builder
      .addCase(answerToGroupRequest.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(answerToGroupRequest.fulfilled, (state) => {
        state.isLoading = false;
      })
      .addCase(answerToGroupRequest.rejected, (state) => {
        state.isLoading = false;
      });
  },
});

export const { cleanActiveGroup } = groupsSlice.actions;
// eslint-disable-next-line import/prefer-default-export
export default groupsSlice.reducer;

import { createSlice } from '@reduxjs/toolkit';
import { sendGroupRequestToJoin } from './actions/sendGroupRequestToJoin';
import { createGroup } from './actions/createGroup';
import { deleteGroup } from './actions/deleteGroup';
import { fetchGroupDetailById } from './actions/fetchGroupDetailById';
import { fetchGroups } from './actions/fetchGroups';
import { fetchMembersOfGroup } from './actions/fetchMembersOfGroup';
import { fetchMyGroups } from './actions/fetchMyGroups';
import { joinGroup } from './actions/joinGroup';
import { updateGroup } from './actions/updateGroup';
import { answerToGroupRequest } from './actions/answerToGroupRequest';
import { GroupsInitialI } from './types';
import { fetchGroupRoleById } from './actions/fetchGroupRoleById';
import { fetchGroupRequests } from './actions/fetchGroupRequests';
import { updateGroupCoverImage } from './actions/updateGroupCoverImage';

const godlInitialState: GroupsInitialI = {
  isLoading: false,
  myGroups: [],
  activeGroup: null,
  membersOfGroup: null,
  groupRequests: [],
  exploreGroups: [],
};

const groupsSlice = createSlice({
  name: 'groups',
  initialState: godlInitialState as GroupsInitialI,
  reducers: {
    cleanActiveGroup(state: GroupsInitialI) {
      state.activeGroup = null;
      state.membersOfGroup = null;
    },

    setActiveGroupCalendar(state: GroupsInitialI) {
      state.activeGroup = null;
      state.membersOfGroup = null;
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

    builder.addCase(fetchGroupRoleById.fulfilled, (state, action) => {
      state.isLoading = false;
      if (state.activeGroup) {
        state.activeGroup.role = action.payload.role;
      }
    });

    builder.addCase(fetchGroupRoleById.rejected, (state) => {
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
        if (state.activeGroup) {
          state.activeGroup.groupName = action.payload.groupName;
          state.activeGroup.private = action.payload.private;
        }
      })
      .addCase(updateGroup.rejected, (state) => {
        state.isLoading = false;
      });

    builder
      .addCase(updateGroupCoverImage.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(updateGroupCoverImage.fulfilled, (state, action) => {
        state.isLoading = false;
        if (!state.activeGroup) return;

        if (!state.activeGroup.CurrentCoverImage) {
          state.activeGroup.CurrentCoverImage = { source: '' };
        }

        state.activeGroup.CurrentCoverImage.source = action.payload.ImageKey;
      })
      .addCase(updateGroupCoverImage.rejected, (state) => {
        state.isLoading = false;
      });

    builder.addCase(fetchMembersOfGroup.fulfilled, (state, action) => {
      state.membersOfGroup = action.payload;
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

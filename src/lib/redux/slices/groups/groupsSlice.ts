import { createSlice } from '@reduxjs/toolkit';
import { GroupsInitialI } from './types';

const groupsInitialStateI: GroupsInitialI = {
  isLoading: false,
  isRoleLoading: true,
  isMembersLoading: true,
  myGroups: [],
  activeGroup: null,
  membersOfGroup: null,
  groupRequests: [],
  exploreGroups: [],
  role: null,
};

const groupsSlice = createSlice({
  name: 'groups',
  initialState: groupsInitialStateI as GroupsInitialI,
  reducers: {
    cleanActiveGroup(state: GroupsInitialI) {
      state.activeGroup = null;
      state.membersOfGroup = null;
      state.isLoading = false;
      state.isRoleLoading = true;
      state.isMembersLoading = true;
      state.role = null;
    },

    setActiveGroupCalendar(state: GroupsInitialI) {
      state.activeGroup = null;
      state.membersOfGroup = null;
    },

    setRoleAsNone(state: GroupsInitialI) {
      state.role = 'None';
    },
  },
});

export const { cleanActiveGroup, setRoleAsNone } = groupsSlice.actions;
// eslint-disable-next-line import/prefer-default-export
export default groupsSlice.reducer;

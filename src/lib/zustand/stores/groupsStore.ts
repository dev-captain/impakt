import { StateCreator } from 'zustand';
import { GetGroupMemberResRoleEnum, GetGroupRequestResV2 } from '@impakt-dev/api-client';
import {
  GetGroupMemberResWithGroupRes,
  ExploreGroupRes,
  GetGroupRes,
  GetGroupMemberResRole,
  GetMembersOfGroupRes,
} from '../../impakt-dev-api-client/react-query/types';

export interface GroupsSlice {
  myGroups: GetGroupMemberResWithGroupRes[];
  setMyGroups: (groups: GetGroupMemberResWithGroupRes[]) => void;
  activeGroup: GetGroupRes | null;
  setActiveGroup: (group: GetGroupRes | null) => void;
  membersOfGroup: GetMembersOfGroupRes | null;
  setMembersOfGroup: (membersOfGroup: GetMembersOfGroupRes) => void;
  groupRequests: GetGroupRequestResV2[];
  setGroupRequests: (groupRequests: GetGroupRequestResV2[]) => void;
  exploreGroups: ExploreGroupRes[];
  setExploreGroups: (exploreGroups: ExploreGroupRes[]) => void;
  addToMyGroups: (groups: GetGroupMemberResWithGroupRes) => void;

  role: GetGroupMemberResRole | null;
  setRole: (role: GetGroupMemberResRole) => void;
  setClear: () => void;
}

export const groupsStore: StateCreator<GroupsSlice> = (set, get) => ({
  exploreGroups: [],
  activeGroup: null,
  groupRequests: [],
  myGroups: [],
  role: null,
  membersOfGroup: null,
  setMyGroups: (groups) => {
    set({ myGroups: groups });
  },
  addToMyGroups: (groups) => {
    set({ myGroups: [...get().myGroups, groups] });
  },
  setGroupRequests: (groups) => {
    set({ groupRequests: groups });
  },
  setExploreGroups: (exploreGroups) => {
    set({ exploreGroups });
  },

  setActiveGroup: (activeGroup) => {
    set({ activeGroup });
  },

  setMembersOfGroup: (membersOfGroup) => {
    set({ membersOfGroup });
  },

  setRole: (role) => {
    set({ role });
  },
  setClear: () => {
    set({
      exploreGroups: [],
      activeGroup: null,
      groupRequests: [],
      myGroups: [],
      role: null,
      membersOfGroup: null,
    });
  },
});

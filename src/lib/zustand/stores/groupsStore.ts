import { StateCreator } from 'zustand';
import {
  GetGroupMemberResRoleEnum,
  GetGroupRequestResV2,
  GetGroupRes,
  GetMembersOfGroupRes,
} from '@impakt-dev/api-client';
import {
  GetGroupMemberResWithGroupRes,
  ExploreGroupRes,
} from '../../impakt-dev-api-client/react-query/types';

export interface GroupsSlice {
  myGroups: GetGroupMemberResWithGroupRes[];
  setMyGroups: (groups: GetGroupMemberResWithGroupRes[]) => void;
  activeGroup: GetGroupRes | null;
  membersOfGroup: GetMembersOfGroupRes | null;
  groupRequests: GetGroupRequestResV2[];
  setGroupRequests: (groupRequests: GetGroupRequestResV2[]) => void;
  exploreGroups: ExploreGroupRes[];
  setExploreGroups: (exploreGroups: ExploreGroupRes[]) => void;
  addToMyGroups: (groups: GetGroupMemberResWithGroupRes) => void;

  role: GetGroupMemberResRoleEnum | null;
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
});

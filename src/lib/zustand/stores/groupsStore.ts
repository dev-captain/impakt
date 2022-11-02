import { StateCreator } from 'zustand';
import {
  ExploreGroupRes,
  GetGroupMemberResRoleEnum,
  GetGroupMemberResWithGroupRes,
  GetGroupRequestResV2,
  GetGroupRes,
  GetMembersOfGroupRes,
} from '@impakt-dev/api-client';

export interface GroupsSlice {
  myGroups: GetGroupMemberResWithGroupRes[];
  activeGroup: GetGroupRes | null;
  membersOfGroup: GetMembersOfGroupRes | null;
  groupRequests: GetGroupRequestResV2[];
  exploreGroups: ExploreGroupRes[];
  role: GetGroupMemberResRoleEnum | null;
}

export const groupsStore: StateCreator<GroupsSlice> = (set) => ({
  exploreGroups: [],
  activeGroup: null,
  groupRequests: [],
  myGroups: [],
  role: null,
  membersOfGroup: null,
});

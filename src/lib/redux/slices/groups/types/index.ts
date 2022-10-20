import {
  ExploreGroupRes,
  GetGroupMemberResRoleEnum,
  GetGroupMemberResWithGroupRes,
  GetGroupRequestResV2,
  GetGroupRes,
  GetMembersOfGroupRes,
} from '@impakt-dev/api-client';

export enum UserRequestStatus {
  Pending = 'Pending',
  Accepted = 'Accepted',
  Declined = 'Declined',
  Cancelled = 'Cancelled',
}

export interface GroupsInitialI {
  isLoading: boolean;
  isRoleLoading: boolean;
  isMembersLoading: boolean;
  myGroups: GetGroupMemberResWithGroupRes[];
  activeGroup: GetGroupRes | null;
  membersOfGroup: GetMembersOfGroupRes | null;
  groupRequests: GetGroupRequestResV2[];
  exploreGroups: ExploreGroupRes[];
  role: GetGroupMemberResRoleEnum | null;
}

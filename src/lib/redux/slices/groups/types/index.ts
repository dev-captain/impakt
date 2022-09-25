import { GetUserRes } from '@impakt-dev/api-client';

export enum GroupRole {
  Creator = 'Creator',
  Owner = 'Owner',
  Admin = 'Admin',
  Moderator = 'Moderator',
  Member = 'Member',
  None = 'None',
}

export enum UserRequestStatus {
  Pending = 'Pending',
  Accepted = 'Accepted',
  Declined = 'Declined',
  Cancelled = 'Cancelled',
}

export interface GetUploadFileRes {
  source: string;
}

export type GetGroupRes = {
  id: number;
  groupName: string;
  createdAt: string;
  updatedAt: string;
  conversationId?: string;
  currentCoverImageId?: string;
  memberCount?: number;
  private: boolean;
  deleted: boolean;
  CurrentCoverImage: GetUploadFileRes;
};

export type GetGroupRequestResV2 = {
  id: number;
  createdAt: string;
  updatedAt: string;
  status: UserRequestStatus;
  requestorId: number;
  requesteeId: number;
  requestor: GetUserRes;
  RequesteeGroup: GetGroupRes;
};

export interface GroupsInitialI {
  isLoading: boolean;
  myGroups: GetMyGroupsRes[];
  activeGroup: (GetGroupRes & { role?: GetMyGroupsRes['role'] }) | null;
  membersOfGroup: GetMembersOfGroupRes | null;
  groupRequests: GetGroupRequestResV2[];
  exploreGroups: GetGroupRes[];
}

export interface GetMyGroupsRes {
  groupId: number;
  userId: number;
  role: GroupRole;
  Group: GetGroupRes;
}

export interface GetMembersOfGroupRes {
  id: number;
  groupName: string;
  createdAt: string | null;
  updatedAt: string | null;
  Members: {
    User: GetUserRes;
    joinedAt: string;
    leftAt: null;
    role: GroupRole;
  }[];
}

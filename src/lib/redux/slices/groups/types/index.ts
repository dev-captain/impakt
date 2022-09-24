import { GetUserRes } from '@impakt-dev/api-client';

export enum UserRequestStatus {
  Pending = 'Pending',
  Accepted = 'Accepted',
  Declined = 'Declined',
  Cancelled = 'Cancelled',
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
  CurrentCoverImage: { source: string };
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
  myGroups: GetGroupRes[];
  activeGroup: GetGroupRes | null;
  membersOfGroup: GetUserRes[];
  groupRequests: GetGroupRequestResV2[];
  exploreGroups: GetGroupRes[];
}

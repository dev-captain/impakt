/**
 * Generated by orval v6.10.2 🍺
 * Do not edit manually.
 * Impakt API
 * OpenAPI spec version: 1.0.0
 */
import type { GetGroupMemberResWithGroupResRole } from './getGroupMemberResWithGroupResRole';
import type { GetGroupRes } from './getGroupRes';

export interface GetGroupMemberResWithGroupRes {
  groupId: number;
  userId: number;
  joinedAt: string;
  leftAt: string | null;
  bannedAt: string | null;
  role: GetGroupMemberResWithGroupResRole;
  /** Associated group details */
  Group: GetGroupRes;
}

/**
 * Generated by orval v6.10.2 🍺
 * Do not edit manually.
 * Impakt API
 * OpenAPI spec version: 1.0.0
 */
import type { GetChallengeRes } from './getChallengeRes';

export interface GetGroupPinnedChallengesRes {
  id: number;
  groupName: string;
  createdAt: string | null;
  updatedAt: string | null;
  /** Pinned challenge */
  Challenge: GetChallengeRes[];
}

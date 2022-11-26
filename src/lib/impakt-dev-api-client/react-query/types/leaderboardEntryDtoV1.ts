/**
 * Generated by orval v6.10.2 🍺
 * Do not edit manually.
 * Impakt API
 * OpenAPI spec version: 1.0.0
 */
import type { LeaderboardEntryDtoV1Player } from './leaderboardEntryDtoV1Player';

export interface LeaderboardEntryDtoV1 {
  /** The leaderboard entry ID */
  id: number;
  /** The player type */
  player: LeaderboardEntryDtoV1Player;
  /** The player ID */
  playerId: number;
  /** The event ID */
  eventId?: number | null;
  /** The score */
  score: number;
  /** The rank */
  rank: number;
}

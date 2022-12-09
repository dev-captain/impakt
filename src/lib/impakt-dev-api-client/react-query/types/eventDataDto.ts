/**
 * Generated by orval v6.10.2 🍺
 * Do not edit manually.
 * Impakt API
 * OpenAPI spec version: 1.0.0
 */

export interface EventDataDto {
  /** The title of the event */
  title: string;
  /** The description of the event */
  description: string;
  creatorId: number;
  assocId?: number | null;
  /** The id of the challenge to be associated */
  challengeId?: number | null;
  /** The id of the group to be associated with */
  groupId?: number | null;
}

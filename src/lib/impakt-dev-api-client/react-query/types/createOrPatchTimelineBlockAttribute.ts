/**
 * Generated by orval v6.10.2 🍺
 * Do not edit manually.
 * Impakt API
 * OpenAPI spec version: 1.0.0
 */
import type { CreateOrPatchTimelineBlockAttributeType } from './createOrPatchTimelineBlockAttributeType';

export interface CreateOrPatchTimelineBlockAttribute {
  /** ID of the timelineBlockAttribute. Required In case of PATCH */
  id?: number | null;
  /** Required in case of POST */
  type?: CreateOrPatchTimelineBlockAttributeType;
  /** Required in case of POST */
  value?: number | null;
  /** delete timeline block attribute */
  deleted?: boolean | null;
}

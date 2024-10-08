/**
 * Generated by orval v6.10.2 🍺
 * Do not edit manually.
 * Impakt API
 * OpenAPI spec version: 1.0.0
 */
import type { PostExerciseReqV1StartPosition } from './postExerciseReqV1StartPosition';
import type { PostExerciseReqV1SupportedTypesItem } from './postExerciseReqV1SupportedTypesItem';

export interface PostExerciseReqV1 {
  name: string;
  cvSupported: boolean;
  startPosition: PostExerciseReqV1StartPosition;
  supportedTypes: PostExerciseReqV1SupportedTypesItem[];
  /** Average time per rep in ms; ex: 1500 */
  averageTime: number;
  point: number;
}

/**
 * Generated by orval v6.10.2 🍺
 * Do not edit manually.
 * Impakt API
 * OpenAPI spec version: 1.0.0
 */
import type { CoinHistoryUserRecordV1Purpose } from './coinHistoryUserRecordV1Purpose';

export interface CoinHistoryUserRecordV1 {
  purpose: CoinHistoryUserRecordV1Purpose;
  timestamp: string;
  value: number;
  routineSessionId: number | null;
}

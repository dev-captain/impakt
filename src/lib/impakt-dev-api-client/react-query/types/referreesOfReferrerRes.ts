/**
 * Generated by orval v6.10.2 🍺
 * Do not edit manually.
 * Impakt API
 * OpenAPI spec version: 1.0.0
 */
import type { ReferralRes } from './referralRes';

export interface ReferreesOfReferrerRes {
  /** The one one sends the referral link is called a Referrer */
  referrerId: number;
  /** The array of Referree that who is registered via Referrer link */
  referrees: ReferralRes[];
  /** Total #of referrees */
  totalCount?: number | null;
  /** Confirmed #of referrees */
  confirmedCount?: number | null;
}

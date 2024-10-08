/**
 * Generated by orval v6.10.2 🍺
 * Do not edit manually.
 * Impakt API
 * OpenAPI spec version: 1.0.0
 */

export interface RefreshReq {
  /** 
    SSO Payload received from discourse.
    DiscourseSig must be included.
     */
  DiscoursePayload?: string | null;
  /** 
    Sig received from discourse in the url.
    DiscoursePayload must be included.
     */
  DiscourseSig?: string | null;
}

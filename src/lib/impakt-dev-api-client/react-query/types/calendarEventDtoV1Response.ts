/**
 * Generated by orval v6.10.2 🍺
 * Do not edit manually.
 * Impakt API
 * OpenAPI spec version: 1.0.0
 */
import type { CalendarEventDataDtoV1Response } from './calendarEventDataDtoV1Response';
import type { CalendarEventScheduleDtoV1Response } from './calendarEventScheduleDtoV1Response';

export interface CalendarEventDtoV1Response {
  id: number;
  visible: boolean;
  data: CalendarEventDataDtoV1Response;
  schedule: CalendarEventScheduleDtoV1Response;
}

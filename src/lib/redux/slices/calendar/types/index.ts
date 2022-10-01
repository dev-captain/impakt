export interface CalendarEventDtoV1Response {
  id: number;
  visible: boolean;
  data: {
    id: number;
    title: number;
    description: string;
    assocId: number | null;
    creatorId: number | null;
    parentEventId: number | null;
    createdAt: string | null;
  };
  schedule: {
    start: string;
    end: string;
    maxOccurrences?: number;
    cancel: string[];
    exclude: string[];
    dayOfWeek: number[];
  };
}

export enum CalendarType {
  Personal = 'Personal',
  Group = 'Group',
}

export interface CalendarDtoV1 {
  id: number;
  type: CalendarType;
  Events: CalendarEventDtoV1Response[];
}

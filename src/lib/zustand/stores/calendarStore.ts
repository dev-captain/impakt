import { CalendarDtoV1TypeEnum } from '@impakt-dev/api-client';
import { Schedule, ScheduleInput } from 'dayspan';
import { StateCreator } from 'zustand';

export interface CalendarStore {
  calendar: {
    events: {
      id?: any;
      data?: string | undefined;
      schedule: Schedule<any> | ScheduleInput<any>;
      visible: boolean;
    }[];
    id: number;
    type: CalendarDtoV1TypeEnum;
  } | null;
  setCalendar: (
    calendar: {
      events: {
        id?: any;
        data?: string | undefined;
        schedule: Schedule<any> | ScheduleInput<any>;
        visible: boolean;
      }[];
      id: number;
      type: CalendarDtoV1TypeEnum;
    } | null,
  ) => void;
}

export const calendarStore: StateCreator<CalendarStore> = (set) => ({
  calendar: null,
  setCalendar: (calendar) => {
    set({ calendar });
  },
});

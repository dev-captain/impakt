import { StateCreator } from 'zustand';
import { CalendarDtoV1 } from '../../impakt-dev-api-client/react-query/types';

export interface CalendarStore {
  calendar: CalendarDtoV1 | null;
  setCalendar: (calendar: CalendarDtoV1) => void;
}

export const calendarStore: StateCreator<CalendarStore> = (set) => ({
  calendar: null,
  setCalendar: (calendar) => {
    set({ calendar });
  },
});

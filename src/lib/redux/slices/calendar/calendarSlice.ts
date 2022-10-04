import { createSlice } from '@reduxjs/toolkit';
import { fetchCalendarById } from './actions/fetchCalendarById';
import { CalendarDtoV1, CalendarType } from './types';

interface CalendarInitialI {
  isGroupCalendarLoading: boolean;
  isPersonalCalendarLoading: boolean;
  activeGroupCalendar: CalendarDtoV1 | null;
  activePersonalCalendar: CalendarDtoV1 | null;
}

const calendarInitialState: CalendarInitialI = {
  isGroupCalendarLoading: false,
  isPersonalCalendarLoading: false,
  activeGroupCalendar: null,
  activePersonalCalendar: null,
};

const calendarSlice = createSlice({
  name: 'calendar',
  initialState: calendarInitialState as CalendarInitialI,
  reducers: {
    setIsGroupCalendarLoading: (state) => {
      state.isGroupCalendarLoading = !state.isGroupCalendarLoading;
    },
    setIsPersonalCalendarLoading: (state) => {
      state.isGroupCalendarLoading = !state.isPersonalCalendarLoading;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchCalendarById.fulfilled, (state, action) => {
      if (action.payload.type === CalendarType.Group) {
        state.activeGroupCalendar = action.payload;
      } else if (action.payload.type === CalendarType.Personal) {
        state.activePersonalCalendar = action.payload;
      }
    });
  },
});

export const { setIsGroupCalendarLoading, setIsPersonalCalendarLoading } = calendarSlice.actions;
// eslint-disable-next-line import/prefer-default-export
export default calendarSlice.reducer;

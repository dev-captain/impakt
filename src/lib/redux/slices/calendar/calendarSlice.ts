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
    cleanCalendar(state: CalendarInitialI) {
      state.isGroupCalendarLoading = false;
      state.isPersonalCalendarLoading = false;
      state.activeGroupCalendar = null;
      state.activePersonalCalendar = null;
    },
    setIsGroupCalendarLoading: (state) => {
      console.log('before', state.isGroupCalendarLoading);
      state.isGroupCalendarLoading = !state.isGroupCalendarLoading;
      console.log('after', state.isGroupCalendarLoading);
    },
    setIsPersonalCalendarLoading: (state) => {
      state.isPersonalCalendarLoading = !state.isPersonalCalendarLoading;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchCalendarById.fulfilled, (state, action) => {
      if (action.payload.type === CalendarType.Group) {
        state.activeGroupCalendar = action.payload;
      } else if (action.payload.type === CalendarType.Personal) {
        state.isPersonalCalendarLoading = false;
        state.activePersonalCalendar = action.payload;
      }
    });
  },
});

export const { cleanCalendar, setIsGroupCalendarLoading, setIsPersonalCalendarLoading } =
  calendarSlice.actions;
// eslint-disable-next-line import/prefer-default-export
export default calendarSlice.reducer;

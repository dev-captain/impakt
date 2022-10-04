import { createAsyncThunk } from '@reduxjs/toolkit';

import axios, { API_SERVER_BASE_URL } from '../../../../axios/api';
import { CalendarDtoV1, CalendarType } from '../types/index';

import { RootState } from '../../../store';
import { setIsGroupCalendarLoading, setIsPersonalCalendarLoading } from '../calendarSlice';

const fetchCalendarById = createAsyncThunk(
  'calendar/fetch-calendar-by-id',
  async (
    { calendarId, type }: { calendarId: number; type: CalendarType },
    { rejectWithValue, getState, dispatch },
  ) => {
    try {
      const {
        memberAuth: { isLogin },
      } = getState() as RootState;

      if (!isLogin) {
        return Promise.reject(new Error('Please Sign In first to continue'));
      }

      dispatch(delegateLoadingAccordingToCalendarType[type]);

      const calendarRes = await axios
        .create({ baseURL: API_SERVER_BASE_URL, withCredentials: true })
        .get(`/api/calendar/calendar/${calendarId}`);

      const calendarData = calendarRes.data as CalendarDtoV1;
      dispatch(delegateLoadingAccordingToCalendarType[type]);

      return calendarData;
    } catch (err: any) {
      dispatch(delegateLoadingAccordingToCalendarType[type]);

      return rejectWithValue(err);
    }
  },
);

const delegateLoadingAccordingToCalendarType = {
  [CalendarType.Group]: setIsGroupCalendarLoading(),
  [CalendarType.Personal]: setIsPersonalCalendarLoading(),
};

// eslint-disable-next-line import/prefer-default-export
export { fetchCalendarById };

import { createAsyncThunk } from '@reduxjs/toolkit';
import { CalendarDtoV1TypeEnum } from '@impakt-dev/api-client';

import { RootState } from '../../../store';
import { setIsGroupCalendarLoading, setIsPersonalCalendarLoading } from '../calendarSlice';
import { CalendarInstance2 } from '../../../../impakt-dev-api-client/init';

const fetchCalendarById = createAsyncThunk(
  'calendar/fetch-calendar-by-id',
  async (
    { calendarId, type }: { calendarId: number; type: CalendarDtoV1TypeEnum },
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
      // will delete next line once the client package ready
      const calendarRes = await CalendarInstance2.calendarControllerGetCalendar(calendarId);

      // will delete next line once the client package ready
      // const tmpconvert = calendarRes.data.Events.map((d: any) => {
      //   return {
      //     ...d,
      //     schedule: {
      //       ...d.schedule,
      //       start: new Date(d.schedule.start),
      //       end: new Date(d.schedule.end),
      //     },
      //   };
      // });
      // will delete next line once the client package ready
      // const calendarData = { ...calendarRes.data, events: tmpconvert };
      dispatch(delegateLoadingAccordingToCalendarType[type]);

      // will delete next line once the client package ready
      // delete calendarData.Events;

      return calendarRes;
    } catch (err: any) {
      dispatch(delegateLoadingAccordingToCalendarType[type]);

      return rejectWithValue(err);
    }
  },
);

const delegateLoadingAccordingToCalendarType = {
  Group: setIsGroupCalendarLoading(),
  Personal: setIsPersonalCalendarLoading(),
};

// eslint-disable-next-line import/prefer-default-export
export { fetchCalendarById };

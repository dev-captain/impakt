import { PatchCalendarEventReq } from '@impakt-dev/api-client';
import { createAsyncThunk } from '@reduxjs/toolkit';
import axios, { API_SERVER_BASE_URL } from '../../../../axios/api';
import { CalendarInstance } from '../../../../impakt-dev-api-client/init';

import { RootState } from '../../../store';

const updateEventBE = createAsyncThunk(
  'events/update',
  async (
    {
      eventId,
      calendarId,
      patchCalendarEventReq,
    }: {
      eventId: number;
      calendarId: number;
      patchCalendarEventReq: PatchCalendarEventReq & {
        assocId: number;
        reschedule?: {
          on: string;
          startDateTime: string;
          endDateTime: string;
        };
      };
    },
    { rejectWithValue, getState },
  ) => {
    try {
      const {
        memberAuth: { isLogin, member },
      } = getState() as RootState;

      if (!isLogin || !member) {
        return Promise.reject(new Error('Please sign in first to continue...'));
      }

      const res = await axios
        .create({ baseURL: API_SERVER_BASE_URL, withCredentials: true })
        .patch(`/api/v1/calendar/events/${eventId}`, patchCalendarEventReq);

      return res.data;
    } catch (err: any) {
      return rejectWithValue(err);
    }
  },
);

// eslint-disable-next-line import/prefer-default-export
export { updateEventBE };

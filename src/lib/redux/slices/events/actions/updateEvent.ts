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
      patchCalendarEventReq: PatchCalendarEventReq;
      // patchCalendarEventReq: {
      //   description: string;
      //   title: string;
      //   assocId: number;
      //   reschedule?: {
      //     on: string;
      //     startDateTime: string;
      //     endDateTime: string;
      //   };
      // };
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

      const res = await CalendarInstance.calendarEventControllerUpdateCalendarEvent(
        eventId,
        calendarId,
        patchCalendarEventReq,
      );

      return res;
    } catch (err: any) {
      return rejectWithValue(err);
    }
  },
);

// eslint-disable-next-line import/prefer-default-export
export { updateEventBE };

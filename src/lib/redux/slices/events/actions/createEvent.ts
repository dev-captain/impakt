import { PostCalendarEventReq } from '@impakt-dev/api-client';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { CalendarInstance } from '../../../../impakt-dev-api-client/init';

import { RootState } from '../../../store';

const createEvent = createAsyncThunk(
  'events/create',
  async (
    { calendarId, payload }: { calendarId: number; payload: PostCalendarEventReq },
    { rejectWithValue, getState },
  ) => {
    try {
      const {
        memberAuth: { isLogin, member },
      } = getState() as RootState;

      if (!isLogin || !member) {
        return Promise.reject(new Error('Please sign in first to continue...'));
      }
      const res = await CalendarInstance.calendarEventControllerCreateCalendarEvent(
        calendarId,
        payload,
      );

      return res;
    } catch (err: any) {
      return rejectWithValue(err);
    }
  },
);

// eslint-disable-next-line import/prefer-default-export
export { createEvent };

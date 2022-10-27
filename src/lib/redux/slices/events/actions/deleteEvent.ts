import { CalendarDtoV1TypeEnum } from '@impakt-dev/api-client';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { CalendarInstance } from '../../../../impakt-dev-api-client/init';

import { RootState } from '../../../store';

const deleteEvent = createAsyncThunk(
  'events/delete',
  async (
    { eventId }: { eventId: number; type: CalendarDtoV1TypeEnum },
    { rejectWithValue, getState },
  ) => {
    try {
      const {
        memberAuth: { isLogin, member },
      } = getState() as RootState;

      if (!isLogin || !member) {
        return Promise.reject(new Error('Please sign in first to continue...'));
      }

      await CalendarInstance.calendarEventControllerDeleteCalendarEvent(eventId);

      return true;
    } catch (err: any) {
      return rejectWithValue(err);
    }
  },
);

// eslint-disable-next-line import/prefer-default-export
export { deleteEvent };

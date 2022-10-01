import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { normalizeCalendarData } from '../../../../../utils';
import { API_SERVER_BASE_URL } from '../../../../axios/api';

import { RootState } from '../../../store';

const createEvent = createAsyncThunk(
  'events/create',
  async (
    { calendarId, payload }: { calendarId: number; payload: any },
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
        .post(`/api/v1/calendar/${calendarId}/events`, payload);

      return res.data;
    } catch (err: any) {
      return rejectWithValue(err);
    }
  },
);

// eslint-disable-next-line import/prefer-default-export
export { createEvent };

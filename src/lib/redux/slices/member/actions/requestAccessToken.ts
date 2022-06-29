import { RefreshReq } from '@impakt-dev/api-client-168-merge';
import { createAsyncThunk } from '@reduxjs/toolkit';

import { authInstance } from '../../../../impakt-dev-api-client/init';
import { RootState } from '../../../store';

const requestAccessToken = createAsyncThunk(
  'member/requestAccessToken',
  async ({ discoursePayload, discourseSig }: RefreshReq, { rejectWithValue, getState }) => {
    try {
      const {
        memberAuth: { isLogin },
      } = getState() as RootState;

      if (!isLogin) {
        return Promise.reject(new Error('Please Sign In first to continue'));
      }

      const requestAccessTokenRes = await authInstance.authControllerSignAccessToken({
        discoursePayload,
        discourseSig,
      });

      return requestAccessTokenRes;
    } catch (err: any) {
      return rejectWithValue(err);
    }
  },
);

// eslint-disable-next-line import/prefer-default-export
export { requestAccessToken };

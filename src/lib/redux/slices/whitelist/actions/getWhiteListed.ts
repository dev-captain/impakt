import { createAsyncThunk } from '@reduxjs/toolkit';

import axios from 'axios';
import { RootState } from '../../../store';

const getWhiteListed = createAsyncThunk(
  'fitness/get-whitelisted',
  async (_, { rejectWithValue, getState }) => {
    try {
      const {
        memberAuth: { isLogin },
      } = getState() as RootState;

      if (!isLogin) {
        return Promise.reject(new Error('Please Sign In first to continue'));
      }
      let isWhitelisted = false;
      await axios
        .create({
          baseURL: process.env.REACT_APP_API_BASE_URL,
          withCredentials: true,
        })
        .get('api/v1/iam/user/is-whitelisted')
        .then((response) => {
          isWhitelisted = response.data.isWhitelisted;
        });

      return isWhitelisted;
    } catch (err: any) {
      return rejectWithValue(err);
    }
  },
);

// eslint-disable-next-line import/prefer-default-export
export { getWhiteListed };

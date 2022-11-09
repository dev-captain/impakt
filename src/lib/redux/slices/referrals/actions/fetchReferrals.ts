import { createAsyncThunk } from '@reduxjs/toolkit';
import { ReferralsInstance } from '../../../../impakt-dev-api-client/init';
import { RootState } from '../../../store';

const fetchReferrals = createAsyncThunk(
  'referrals/fetchReferrals',
  async ({ count }: { count: boolean }, { rejectWithValue, getState }) => {
    try {
      const {
        memberAuth: { isLogin },
      } = getState() as RootState;

      if (!isLogin) {
        return Promise.reject(new Error('Please Sign In first to continue'));
      }
      const referralsRes = await ReferralsInstance.referralControllerGetReferrees(count);

      return referralsRes;
    } catch (err: any) {
      return rejectWithValue(err);
    }
  },
);

// eslint-disable-next-line import/prefer-default-export
export { fetchReferrals };

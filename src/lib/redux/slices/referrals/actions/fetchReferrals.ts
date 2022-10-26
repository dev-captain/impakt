import { createAsyncThunk } from '@reduxjs/toolkit';
import { ReferralsInstance } from '../../../../impakt-dev-api-client/init';

const fetchReferrals = createAsyncThunk(
  'referrals/fetchReferrals',
  async ({ count }: { count: boolean }, { rejectWithValue }) => {
    try {
      const referralsRes = await ReferralsInstance.referralControllerGetReferrees(count);

      return referralsRes;
    } catch (err: any) {
      return rejectWithValue(err);
    }
  },
);

// eslint-disable-next-line import/prefer-default-export
export { fetchReferrals };

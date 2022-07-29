import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// import { FitnessInstance } from '../../../../impakt-dev-api-client/init';
import { RootState } from '../../../store';

const fetchRewardHistory = createAsyncThunk(
  'fitness/fetch-reward-history',
  async (userId: number, { rejectWithValue, getState }) => {
    try {
      const {
        memberAuth: { isLogin },
      } = getState() as RootState;

      if (!isLogin) {
        return Promise.reject(new Error('Please Sign In first to continue'));
      }

      // const { exerciseStats } = await FitnessInstance.fitnessStatsControllerGetExerciseStats(
      //   userId,
      // );
      // impakt-api-kevde-cu-2pr-acmvdl.herokuapp.com/api/v1/rewards/history
      let rewardHistory: any = [];
      await axios
        .create({
          baseURL: process.env.REACT_APP_API_BASE_URL,
          withCredentials: true,
        })
        .get(`api/v1/godl/history/${userId}`)
        .then((response) => {
          rewardHistory = response.data;
        });

      return rewardHistory;
      // return exerciseStats;
    } catch (err: any) {
      return rejectWithValue(err);
    }
  },
);

// eslint-disable-next-line import/prefer-default-export
export { fetchRewardHistory };

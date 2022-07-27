import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// import { FitnessInstance } from '../../../../impakt-dev-api-client/init';
import { RootState } from '../../../store';

const fetchExerciseStats = createAsyncThunk(
  'fitness/fetch-exercise-stats',
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
      let exerciseStats: any = [];
      await axios
        .create({
          baseURL: 'https://impakt-api-kevde-cu-37b-p8j2qy.herokuapp.com',
          withCredentials: true,
        })
        .get(`api/v1/stats/fitness/${userId}/exercise`)
        .then((response) => {
          exerciseStats = response.data.exerciseStats;
        });

      return exerciseStats;
      // return exerciseStats;
    } catch (err: any) {
      return rejectWithValue(err);
    }
  },
);

// eslint-disable-next-line import/prefer-default-export
export { fetchExerciseStats };

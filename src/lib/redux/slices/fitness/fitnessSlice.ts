import { createSlice } from '@reduxjs/toolkit';
import { fetchActiveDays } from './actions/fetchActiveDays';
import { fetchExerciseStats } from './actions/fetchExerciseStats';

interface FitnessInitialI {
  isFitnessLoading: boolean;
  activeDays: number;
  excersieStates: Array<string>;
}

const fitnessInitialState: FitnessInitialI = {
  isFitnessLoading: false,
  activeDays: 0,
  excersieStates: [],
};

const fitnessSlice = createSlice({
  name: 'fitness',
  initialState: fitnessInitialState as FitnessInitialI,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchActiveDays.pending, (state) => {
        state.isFitnessLoading = true;
      })
      .addCase(fetchActiveDays.fulfilled, (state, action) => {
        state.activeDays = action.payload;
        state.isFitnessLoading = false;
      })
      .addCase(fetchActiveDays.rejected, (state) => {
        state.activeDays = 0;
        state.isFitnessLoading = false;
      })
      .addCase(fetchExerciseStats.pending, (state) => {
        state.isFitnessLoading = true;
      })
      .addCase(fetchExerciseStats.fulfilled, (state, action) => {
        state.excersieStates = action.payload;
        state.isFitnessLoading = false;
      })
      .addCase(fetchExerciseStats.rejected, (state) => {
        state.excersieStates = [];
        state.isFitnessLoading = false;
      });
  },
});

// eslint-disable-next-line import/prefer-default-export
export default fitnessSlice.reducer;

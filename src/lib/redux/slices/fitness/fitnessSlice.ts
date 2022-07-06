import { createSlice } from '@reduxjs/toolkit';
import { fetchActiveDays } from './actions/fetchActiveDays';

interface FitnessInitialI {
  isFitnessLoading: boolean;
  activeDays: number;
}

const fitnessInitialState: FitnessInitialI = {
  isFitnessLoading: false,
  activeDays: 0,
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
      });
  },
});

// eslint-disable-next-line import/prefer-default-export
export default fitnessSlice.reducer;

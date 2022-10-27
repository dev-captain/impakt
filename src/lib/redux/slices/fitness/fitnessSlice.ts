import { createSlice } from '@reduxjs/toolkit';

interface FitnessInitialI {
  isFitnessLoading: boolean;
  activeDays: number;
  exerciseState: Array<string>;
}

const fitnessInitialState: FitnessInitialI = {
  isFitnessLoading: false,
  activeDays: 0,
  exerciseState: [],
};

const fitnessSlice = createSlice({
  name: 'fitness',
  initialState: fitnessInitialState as FitnessInitialI,
  reducers: {},
});

// eslint-disable-next-line import/prefer-default-export
export default fitnessSlice.reducer;

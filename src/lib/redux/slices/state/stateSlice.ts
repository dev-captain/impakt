import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface InitialStateI {
  heroVideo: {
    isScrolling: boolean;
    borderX: number;
    borderY: number;
    isAnimated: boolean;
  };
}

const initialState: InitialStateI = {
  heroVideo: {
    isScrolling: false,
    borderX: 0,
    borderY: 0,
    isAnimated: false,
  },
};

const stateSlice = createSlice({
  name: 'state',
  initialState: initialState as InitialStateI,
  reducers: {
    setIsScrolling: (state: InitialStateI) => {
      state.heroVideo.isScrolling = !state.heroVideo.isScrolling;
    },

    setIsAnimated: (state: InitialStateI) => {
      state.heroVideo.isAnimated = !state.heroVideo.isAnimated;
    },
    setBorderX: (state: InitialStateI, action: PayloadAction<{ borderX: number }>) => {
      state.heroVideo.borderX = action.payload.borderX + 30;
    },
    setBorderY: (state: InitialStateI, action: PayloadAction<{ borderY: number }>) => {
      state.heroVideo.borderY = action.payload.borderY + 248;
    },
  },
});

// eslint-disable-next-line import/prefer-default-export
export const { setIsScrolling, setBorderX, setIsAnimated, setBorderY } = stateSlice.actions;
export default stateSlice.reducer;

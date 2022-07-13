import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface InitialStateI {
  heroVideo: {
    isScrolling: boolean;
    borderX: number;
    borderY: number;
    isAnimated: boolean;
    isLoaded: boolean;
  };
}

const initialState: InitialStateI = {
  heroVideo: {
    isScrolling: false,
    borderX: 940,
    borderY: 130,
    isAnimated: false,
    isLoaded: false,
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
      state.heroVideo.borderX = action.payload.borderX;
    },
    setBorderY: (state: InitialStateI, action: PayloadAction<{ borderY: number }>) => {
      state.heroVideo.borderY = action.payload.borderY;
    },

    setIsLoaded: (state: InitialStateI, action: PayloadAction<boolean>) => {
      state.heroVideo.isLoaded = action.payload;
    },
  },
});

// eslint-disable-next-line import/prefer-default-export
export const { setIsScrolling, setBorderX, setIsAnimated, setBorderY, setIsLoaded } =
  stateSlice.actions;
export default stateSlice.reducer;

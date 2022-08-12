import { createSlice } from '@reduxjs/toolkit';
import { getWhiteListed } from './actions/getWhiteListed';

interface WhitelistInitialI {
  isWhitelisted: boolean;
  isWhitelistingLoading: boolean;
}

const whitelistInitialState: WhitelistInitialI = {
  isWhitelisted: false,
  isWhitelistingLoading: false,
};

const whitelistSlice = createSlice({
  name: 'whitelist',
  initialState: whitelistInitialState as WhitelistInitialI,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getWhiteListed.pending, (state) => {
        state.isWhitelisted = false;
        state.isWhitelistingLoading = true;
      })
      .addCase(getWhiteListed.fulfilled, (state, action) => {
        state.isWhitelisted = action.payload;
        state.isWhitelistingLoading = false;
      })
      .addCase(getWhiteListed.rejected, (state) => {
        state.isWhitelisted = false;
        state.isWhitelistingLoading = false;
      });
  },
});

// eslint-disable-next-line import/prefer-default-export
export default whitelistSlice.reducer;

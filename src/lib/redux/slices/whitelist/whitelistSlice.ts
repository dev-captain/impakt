import { createSlice } from '@reduxjs/toolkit';
import { getWhiteListed } from './actions/getWhiteListed';

interface WhitelistInitialI {
  isWhitelisted: boolean;
}

const whitelistInitialState: WhitelistInitialI = {
  isWhitelisted: false,
};

const whitelistSlice = createSlice({
  name: 'whitelist',
  initialState: whitelistInitialState as WhitelistInitialI,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getWhiteListed.pending, (state) => {
        state.isWhitelisted = false;
      })
      .addCase(getWhiteListed.fulfilled, (state, action) => {
        state.isWhitelisted = action.payload;
      })
      .addCase(getWhiteListed.rejected, (state) => {
        state.isWhitelisted = false;
      });
  },
});

// eslint-disable-next-line import/prefer-default-export
export default whitelistSlice.reducer;

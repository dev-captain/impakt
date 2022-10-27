import { createSlice } from '@reduxjs/toolkit';

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
});

// eslint-disable-next-line import/prefer-default-export
export default whitelistSlice.reducer;

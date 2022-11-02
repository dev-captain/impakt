import { createSlice } from '@reduxjs/toolkit';

interface EventsInitialI {
  isLoading: boolean;
}

const eventsInitialState: EventsInitialI = {
  isLoading: false,
};

const eventsSlice = createSlice({
  name: 'events',
  initialState: eventsInitialState as EventsInitialI,
  reducers: {},
});
// eslint-disable-next-line import/prefer-default-export
export default eventsSlice.reducer;

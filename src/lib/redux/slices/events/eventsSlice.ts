import { createSlice } from '@reduxjs/toolkit';
import { createEvent } from './actions/createEvent';
import { deleteEvent } from './actions/deleteEvent';

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
  extraReducers: (builder) => {
    builder
      .addCase(createEvent.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(createEvent.fulfilled, (state) => {
        state.isLoading = false;
      })
      .addCase(createEvent.rejected, (state) => {
        state.isLoading = false;
      });

    builder
      .addCase(deleteEvent.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(deleteEvent.fulfilled, (state) => {
        state.isLoading = false;
      })
      .addCase(deleteEvent.rejected, (state) => {
        state.isLoading = false;
      });
  },
});
// eslint-disable-next-line import/prefer-default-export
export default eventsSlice.reducer;

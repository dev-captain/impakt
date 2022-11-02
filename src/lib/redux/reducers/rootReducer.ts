import { combineReducers } from 'redux';

// import stateReducer from '../slices/state/stateSlice';
import calendarReducer from '../slices/calendar/calendarSlice';
import eventsReducer from '../slices/events/eventsSlice';
import challengesReducer from '../slices/challenges/challengesSlice';
import postsReducer from '../slices/forum/postsSlice';

const rootReducer = combineReducers({
  calendarReducer,
  eventsReducer,
  challengesReducer,
  postsReducer,
});

export default rootReducer;

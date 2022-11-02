import { combineReducers } from 'redux';

// import stateReducer from '../slices/state/stateSlice';
import eventsReducer from '../slices/events/eventsSlice';
import challengesReducer from '../slices/challenges/challengesSlice';

const rootReducer = combineReducers({
  eventsReducer,
  challengesReducer,
});

export default rootReducer;

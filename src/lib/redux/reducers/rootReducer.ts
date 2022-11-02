import { combineReducers } from 'redux';

import challengesReducer from '../slices/challenges/challengesSlice';

const rootReducer = combineReducers({
  challengesReducer,
});

export default rootReducer;

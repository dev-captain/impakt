import { combineReducers } from 'redux';
import storage from 'redux-persist/lib/storage';
import persistReducer from 'redux-persist/es/persistReducer';

import fitnessReducer from '../slices/fitness/fitnessSlice';
// import stateReducer from '../slices/state/stateSlice';
import discourseReducer from '../slices/discourse/discourseSlice';

const persistConfig = {
  key: 'root',
  storage,
  blacklist: ['stateReducer'],
};

const rootReducer = combineReducers({
  fitnessReducer,
  // stateReducer,
  discourseReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export default persistedReducer;

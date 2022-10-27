import { combineReducers } from 'redux';
import storage from 'redux-persist/lib/storage';
import persistReducer from 'redux-persist/es/persistReducer';

import knowledgeBaseReducer from '../slices/knowledgeBase/knowledgeBaseSlice';
import fitnessReducer from '../slices/fitness/fitnessSlice';
import referralsReducer from '../slices/referrals/referralsSlice';
// import stateReducer from '../slices/state/stateSlice';
import whitelistReducer from '../slices/whitelist/whitelistSlice';
import discourseReducer from '../slices/discourse/discourseSlice';

const persistConfig = {
  key: 'root',
  storage,
  blacklist: ['stateReducer'],
};

const rootReducer = combineReducers({
  knowledgeBase: knowledgeBaseReducer,
  fitnessReducer,
  referrals: referralsReducer,
  // stateReducer,
  whitelistReducer,
  discourseReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export default persistedReducer;

import { combineReducers } from 'redux';
import storage from 'redux-persist/lib/storage';
import persistReducer from 'redux-persist/es/persistReducer';

import memberAuth from '../slices/member/memberAuthSlice';
import knowledgeBaseReducer from '../slices/knowledgeBase/knowledgeBaseSlice';
import godlReducer from '../slices/godl/godlSlice';
import fitnessReducer from '../slices/fitness/fitnessSlice';
import rewardHistoryReducer from '../slices/rewardHistory/rewardHistorySlice';
import referralsReducer from '../slices/referrals/referralsSlice';
// import stateReducer from '../slices/state/stateSlice';
import whitelistReducer from '../slices/whitelist/whitelistSlice';
import discourseReducer from '../slices/discourse/discourseSlice';
import koinReducer from '../slices/koin/koinSlice';

const persistConfig = {
  key: 'root',
  storage,
  blacklist: ['memberAuth', 'stateReducer'],
};

export const memberAuthPersistConfig = {
  key: 'memberAuth',
  storage,
  blacklist: ['isLoading', 'requestAccessTokenAttemptCount'],
};

const rootReducer = combineReducers({
  memberAuth: persistReducer(memberAuthPersistConfig, memberAuth),
  knowledgeBase: knowledgeBaseReducer,
  godl: godlReducer,
  koin: koinReducer,
  fitnessReducer,
  rewardHistoryReducer,
  referrals: referralsReducer,
  // stateReducer,
  whitelistReducer,
  discourseReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export default persistedReducer;

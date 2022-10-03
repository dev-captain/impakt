import { combineReducers } from 'redux';
import storage from 'redux-persist/lib/storage';
import persistReducer from 'redux-persist/es/persistReducer';

import memberAuth from '../slices/member/memberAuthSlice';
import knowledgeBaseReducer from '../slices/knowledgeBase/knowledgeBaseSlice';
import godlReducer from '../slices/godl/godlSlice';
import fitnessReducer from '../slices/fitness/fitnessSlice';
import rewardHistoryReducer from '../slices/rewardHistory/rewardHistorySlice';
import referralsReducer from '../slices/referrals/referralsSlice';
import stateReducer from '../slices/state/stateSlice';
import whitelistReducer from '../slices/whitelist/whitelistSlice';
import discourseReducer from '../slices/discourse/discourseSlice';
import groupsReducer from '../slices/groups/groupsSlice';
import calendarReducer from '../slices/calendar/calendarSlice';
import eventsReducer from '../slices/events/eventsSlice';
import challengesReducer from '../slices/challenges/challengesSlice';

const persistConfig = {
  key: 'root',
  storage,
  blacklist: [
    'memberAuth',
    'stateReducer',
    'groupsReducer',
    'calendarReducer',
    'eventsReducer',
    'myChallenges',
    'challengesReducer',
  ],
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
  fitnessReducer,
  rewardHistoryReducer,
  referrals: referralsReducer,
  stateReducer,
  whitelistReducer,
  discourseReducer,
  groupsReducer,
  calendarReducer,
  eventsReducer,
  challengesReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export default persistedReducer;

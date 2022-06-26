import { combineReducers } from 'redux';
import storage from 'redux-persist/lib/storage';
import persistReducer from 'redux-persist/es/persistReducer';

import memberAuthReducer from '../slices/member/memberAuthSlice';
import memberReducer from '../slices/member/memberSlice';
import knowledgeBaseReducer from '../slices/knowledgeBase/knowledgeBaseSlice';
import godlReducer from '../slices/godl/godlSlice';

const persistConfig = {
  key: 'root',
  storage,
  blacklist: ['memberAuthReducer'],
};

export const memberAuthPersistConfig = {
  key: 'memberAuthReducer',
  storage,
  blacklist: ['isLoading'],
};

const rootReducer = combineReducers({
  memberAuthReducer: persistReducer(memberAuthPersistConfig, memberAuthReducer),
  memberReducer,
  knowledgeBaseReducer,
  godlReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export default persistedReducer;

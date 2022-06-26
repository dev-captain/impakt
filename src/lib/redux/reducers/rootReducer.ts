import { combineReducers } from 'redux';
import storage from 'redux-persist/lib/storage';
import persistReducer from 'redux-persist/es/persistReducer';

import memberAuth from '../slices/member/memberAuthSlice';
import knowledgeBaseReducer from '../slices/knowledgeBase/knowledgeBaseSlice';
import godlReducer from '../slices/godl/godlSlice';

const persistConfig = {
  key: 'root',
  storage,
  blacklist: ['memberAuth'],
};

export const memberAuthPersistConfig = {
  key: 'memberAuth',
  storage,
  blacklist: ['isLoading'],
};

const rootReducer = combineReducers({
  memberAuth: persistReducer(memberAuthPersistConfig, memberAuth),
  knowledgeBase: knowledgeBaseReducer,
  godl: godlReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export default persistedReducer;

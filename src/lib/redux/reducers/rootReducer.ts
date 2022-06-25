import { combineReducers } from 'redux';
import memberAuthReducer from '../slices/member/memberAuthSlice';
import memberReducer from '../slices/member/memberSlice';
import knowledgeBaseReducer from '../slices/knowledgeBase/knowledgeBaseSlice';
import godlReducer from '../slices/godl/godlSlice';

const rootReducer = combineReducers({
  memberAuthReducer,
  memberReducer,
  knowledgeBaseReducer,
  godlReducer,
});

export default rootReducer;

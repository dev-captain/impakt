import { combineReducers } from 'redux';
import memberAuthReducer from '../slices/member/memberAuthSlice';
import memberReducer from '../slices/member/memberSlice';
import knowledgeBaseReducer from '../slices/knowledgeBase/knowledgeBaseSlice';

const rootReducer = combineReducers({
  memberAuthReducer,
  memberReducer,
  knowledgeBaseReducer,
});

export default rootReducer;

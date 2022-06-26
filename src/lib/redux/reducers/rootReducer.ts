import { combineReducers } from 'redux';
import memberAuthReducer from '../slices/member/memberAuthSlice';
import memberReducer from '../slices/member/memberSlice';
import knowledgeBaseReducer from '../slices/knowledgeBase/knowledgeBaseSlice';
import godlReducer from '../slices/godl/godlSlice';
import fitnessReducer from '../slices/fitness/fitnessSlice';

const rootReducer = combineReducers({
  memberAuthReducer,
  memberReducer,
  knowledgeBaseReducer,
  godlReducer,
  fitnessReducer,
});

export default rootReducer;

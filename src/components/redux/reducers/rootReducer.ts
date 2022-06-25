import { combineReducers } from 'redux';
import memberAuthReducer from '../slices/member/memberAuthSlice';
import memberReducer from '../slices/member/memberSlice';

const rootReducer = combineReducers({
  memberAuthReducer,
  memberReducer,
});

export default rootReducer;

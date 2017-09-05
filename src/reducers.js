import { combineReducers } from 'redux';

import authReducers from './users/reducers/auth';
import userReducers from './users/reducers/users';
import topicsReducer from './tally/reducers/topics';

export default combineReducers({
  authReducers,
  userReducers,
  topicsReducer,
});

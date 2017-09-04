import { combineReducers } from 'redux';

import authReducers from './users/reducers/auth';
import userReducers from './users/reducers/users';

export default combineReducers({
  authReducers,
  userReducers,
});

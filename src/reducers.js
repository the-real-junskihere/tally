import { combineReducers } from 'redux';

import usersReducer from './users/reducers/users';

export default combineReducers({
  usersReducer,
});

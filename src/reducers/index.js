import { combineReducers } from 'redux';

import auth from './auth';
import chat from './chat';
import errors from './errors';
import isFetching from './is-fetching';

export default combineReducers({
  auth,
  chat,
  errors,
  isFetching,
});

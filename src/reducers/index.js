import { combineReducers } from 'redux';

import auth from './auth';
import chat from './chat';
import isFetching from './is-fetching';

export const rootReducer = combineReducers({
  auth,
  chat,
  isFetching
});
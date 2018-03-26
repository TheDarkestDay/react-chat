/* eslint-env jest */
import reducer from './auth';
import * as ActionType from '../constants/action-types';

describe('auth reducer', () => {
  it('should return initial state', () => {
    expect(reducer(undefined, {})).toEqual({
      isAuthenticated: false,
      user: null,
    });
  });

  it('should return initial state on logout', () => {
    expect(reducer({ isAuthenticated: true, user: {} }, { type: ActionType.LOGOUT })).toEqual({
      isAuthenticated: false,
      user: null,
    });
  });
});

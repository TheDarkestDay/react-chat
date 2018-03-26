/* eslint-env jest */
import reducer from './auth';
import * as ActionType from '../constants/action-types';

import { userMock } from '../mocks';

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

  const authSuccessActions = [
    ActionType.LOGIN_SUCCESS,
    ActionType.SIGNUP_SUCCESS,
    ActionType.WHOAMI_SUCCESS,
  ];

  authSuccessActions.forEach((action) => {
    it(`should authenticate user after ${action} action`, () => {
      expect(reducer(undefined, { type: action, payload: userMock })).toEqual({
        isAuthenticated: true,
        user: userMock,
      });
    });
  });

  it('should update user info after EDIT_USER_SUCCESS action', () => {
    const editedUserMock = {
      _id: '1',
      username: 'test2',
      firstName: 'John',
      lastName: 'Doe',
    };

    expect(reducer(
      {
        isAuthenticated: true,
        user: userMock,
      },
      {
        type: ActionType.EDIT_USER_SUCCESS,
        payload: editedUserMock,
      },
    )).toEqual({
      isAuthenticated: true,
      user: editedUserMock,
    });
  });
});

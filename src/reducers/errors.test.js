/* eslint-env jest */
import reducer from './errors';
import * as ActionType from '../constants/action-types';

describe('Errors reducer', () => {
  const errorActions = [
    ActionType.LOGIN_ERROR,
    ActionType.SIGNUP_ERROR,
    ActionType.WHOAMI_ERROR,
    ActionType.GET_CHATS_ERROR,
    ActionType.GET_MESSAGES_ERROR,
    ActionType.JOIN_CHAT_ERROR,
    ActionType.DELETE_CHAT_ERROR,
    ActionType.LEAVE_CHAT_ERROR,
    ActionType.EDIT_USER_ERROR,
    ActionType.CREATE_CHAT_ERROR,
  ];

  it('should return initial state', () => {
    expect(reducer(undefined, {})).toEqual({
      errorMessage: '',
      isErrorMessageShown: false,
    });
  });

  errorActions.forEach((action) => {
    it(`should handle ${action} action`, () => {
      const expectedError = 'Something goes wrong';
      expect(reducer(undefined, { type: action, payload: expectedError })).toEqual({
        errorMessage: expectedError,
        isErrorMessageShown: true,
      });
    });
  });

  it('should close error message in case of snackbar close', () => {
    expect(reducer(
      {
        errorMessage: '',
        isErrorMessageShown: true,
      },
      { type: ActionType.SNACKBAR_CLOSE },
    )).toEqual({
      errorMessage: '',
      isErrorMessageShown: false,
    });
  });
});

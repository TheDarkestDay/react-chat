import * as ActionType from '../constants/action-types';

const initialState = {
  errorMessage: null,
  isAuthenticated: false,
  isErrorMessageShown: false,
  isRequestInProgress: false,
  user: null
};

export default function auth(state = initialState, action) {
  const { type, payload } = action;

  switch(type) {
    case ActionType.LOGIN_SUCCESS:
    case ActionType.SIGNUP_SUCCESS:
    case ActionType.WHOAMI_SUCCESS:
      return {
        isAuthenticated: true,
        isRequestInProgress: false,
        isErrorMessageShown: false,
        errorMessage: null,
        user: payload
      };
    case ActionType.LOGIN_ERROR:
    case ActionType.SIGNUP_ERROR:
    case ActionType.WHOAMI_ERROR:
      return {
        ...initialState,
        isErrorMessageShown: true,
        errorMessage: payload
      };
    case ActionType.LOGIN_REQUEST:
    case ActionType.SIGNUP_REQUEST:
      return {
        ...state,
        isErrorMessageShown: false,
        errorMessage: null,
        isRequestInProgress: true
      }
    case ActionType.SNACKBAR_CLOSE:
      return {
        ...state,
        isErrorMessageShown: false,
        errorMessage: null
      }
    default: 
      return state;
  }
}
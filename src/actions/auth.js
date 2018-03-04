import * as ActionType from '../constants/action-types';
import backend from '../services/backend';

export function login(credentials) {
  return (dispatch) => {
    dispatch(loginRequest());

    backend
      .login(credentials)
      .then((responseData) => {
        localStorage.setItem('token', responseData.token);
        dispatch(loginSuccess())
      })
      .catch((error) => dispatch(loginError(error)))
  };
}

export function loginRequest() {
  return {
    type: ActionType.LOGIN_REQUEST
  }
}

export function loginSuccess() {
  return {
    type: ActionType.LOGIN_SUCCESS
  }
}

export function loginError(errorMessage) {
  return {
    type: ActionType.LOGIN_ERROR,
    payload: errorMessage
  }
}

export function signup(credentials) {
  return (dispatch) => {
    dispatch(signupRequest());

    backend
      .signup(credentials)
      .then((responseData) => {
        localStorage.setItem('token', responseData.token);
        dispatch(signupSuccess())
      })
      .catch((error) => dispatch(signupError(error)))
  };
}

export function signupRequest() {
  return {
    type: ActionType.SIGNUP_REQUEST
  }
}

export function signupSuccess() {
  return {
    type: ActionType.SIGNUP_SUCCESS
  }
}

export function signupError(errorMessage) {
  return {
    type: ActionType.SIGNUP_ERROR,
    payload: errorMessage
  }
}

export function closeSnackbar() {
  return {
    type: ActionType.SNACKBAR_CLOSE
  }
};
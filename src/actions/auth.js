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

export function getWhoami() {
  return (dispatch) => {
    backend
      .getWhoami()
      .then((user) => dispatch(whoamiSuccess(user)))
      .catch((error) => dispatch(whoamiError(error)))
  };
}

export function whoamiSuccess(user) {
  return {
    type: ActionType.WHOAMI_SUCCESS,
    payload: user
  }
}

export function whoamiError(errorMessage) {
  return {
    type: ActionType.WHOAMI_ERROR,
    payload: errorMessage
  }
}

export function closeSnackbar() {
  return {
    type: ActionType.SNACKBAR_CLOSE
  }
};
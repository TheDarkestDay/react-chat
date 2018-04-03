import * as ActionType from '../constants/action-types';

const initialState = {
  isAuthenticated: false,
  user: null,
};

export default function auth(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case ActionType.LOGIN_SUCCESS:
    case ActionType.SIGNUP_SUCCESS:
    case ActionType.WHOAMI_SUCCESS:
      return {
        isAuthenticated: true,
        user: payload,
      };
    case ActionType.EDIT_USER_SUCCESS:
      return {
        ...state,
        user: {
          ...state.user,
          ...payload,
        },
      };
    case ActionType.LOGOUT:
      return initialState;
    default:
      return state;
  }
}

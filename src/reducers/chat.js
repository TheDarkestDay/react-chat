import * as ActionType from '../constants/action-types';

const initialState = {
  chats: [],
  errorMessage: null,
  isErrorMessageShown: false,
  isRequestInProgress: false
};

export default function chat(state = initialState, action) {
  const { type, payload } = action;

  switch(type) {
    default:
      return state;
  }
}
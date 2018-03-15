import * as ActionType from '../constants/action-types';

const initialState = {
  activeChat: null,
  chats: [],
  errorMessage: null,
  isErrorMessageShown: false,
  isRequestInProgress: false
};

export default function chat(state = initialState, action) {
  const { type, payload } = action;

  switch(type) {
    case ActionType.SET_ACTIVE_CHAT:
      return {
        ...state,
        activeChat: state.chats.find((chat) => chat._id === payload)
      }
    case ActionType.JOIN_CHAT_SUCCESS:
      return {
        ...state,
        activeChat: payload
      }
    case ActionType.CREATE_CHAT_REQUEST:
      return {
        ...state,
        isRequestInProgress: true
      }
    case ActionType.CREATE_CHAT_SUCCESS:
      return {
        ...state,
        isRequestInProgress: false,
        chats: state.chats.concat(payload)
      }
    case ActionType.GET_CHATS_SUCCESS:
      return {
        ...state,
        isRequestInProgress: false,
        chats: payload
      }
    case ActionType.CREATE_CHAT_ERROR:
      return {
        ...state,
        isRequestInProgress: false,
        isErrorMessageShown: true,
        errorMessage: payload
      }
    case ActionType.SNACKBAR_CLOSE:
      return {
        ...state,
        isErrorMessageShown: false
      }
    default:
      return state;
  }
}
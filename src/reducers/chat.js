import * as ActionType from '../constants/action-types';

const initialState = {
  activeChat: null,
  chats: [],
  chatQuery: '',
  errorMessage: null,
  isAllChatsAreDisplayed: false,
  isErrorMessageShown: false,
  isRequestInProgress: false
};

const replaceChat = (chats, updatedChat) => {
  const result = chats.slice();
  const oldChatIdx = result.findIndex((chat) => chat._id === updatedChat._id);

  result.splice(oldChatIdx, 1, updatedChat);
  
  return result;
};

export default function chat(state = initialState, action) {
  const { type, payload } = action;

  switch(type) {
    case ActionType.SET_ACTIVE_CHAT:
      return {
        ...state,
        activeChat: state.chats.find((chat) => chat._id === payload)
      }
    case ActionType.SHOW_ALL_CHATS:
      return {
        ...state,
        chatQuery: '',
        isAllChatsAreDisplayed: true
      }
    case ActionType.SHOW_MY_CHATS:
      return {
        ...state,
        chatQuery: '',
        isAllChatsAreDisplayed: false
      }
    case ActionType.CHAT_QUERY_CHANGE:
      return {
        ...state,
        chatQuery: payload
      }
    case ActionType.JOIN_CHAT_SUCCESS:
      return {
        ...state,
        activeChat: payload,
        chats: replaceChat(state.chats, payload)
      }
    case ActionType.CREATE_CHAT_REQUEST:
      return {
        ...state,
        isRequestInProgress: true
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
    case ActionType.NEW_CHAT_EVENT:
      return {
        ...state,
        chats: state.chats.concat(payload)
      }
    default:
      return state;
  }
}
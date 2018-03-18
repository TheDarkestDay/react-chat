import * as ActionType from '../constants/action-types';

const initialState = {
  activeChatId: '',
  chats: [],
  chatQuery: '',
  errorMessage: null,
  isAllChatsAreDisplayed: false,
  isErrorMessageShown: false,
  isSocketConnected: false,
  messages: []
};

const replaceChat = (chats, updatedChat) => {
  const result = chats.slice();
  const oldChatIdx = result.findIndex((chat) => chat._id === updatedChat._id);

  result.splice(oldChatIdx, 1, updatedChat);
  
  return result;
};

const removeChat = (chats, removedChat) => {
  const result = chats.slice();
  const removedChatIdx = result.findIndex((chat) => chat._id === removedChat._id);

  if (removedChatIdx === -1) {
    return result;
  }

  result.splice(removedChatIdx, 1);

  return result;
};

export default function chat(state = initialState, action) {
  const { type, payload } = action;

  switch(type) {
    case ActionType.SET_ACTIVE_CHAT:
      return {
        ...state,
        activeChatId: payload
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
        chats: replaceChat(state.chats, payload)
      }
    case ActionType.GET_CHATS_SUCCESS:
      return {
        ...state,
        chats: payload
      }
    case ActionType.GET_MESSAGES_SUCCESS:
      return {
        ...state,
        messages: payload
      }
    case ActionType.CREATE_CHAT_ERROR:
      return {
        ...state,
        isErrorMessageShown: true,
        errorMessage: payload
      }
    case ActionType.DELETE_CHAT_SUCCESS:
      return {
        ...state,
        activeChatId: '',
        chats: removeChat(state.chats, payload)
      }
    case ActionType.LEAVE_CHAT_SUCCESS:
      return {
        ...state,
        chats: replaceChat(state.chats, payload)
      }
    case ActionType.SNACKBAR_CLOSE:
      return {
        ...state,
        isErrorMessageShown: false
      }
    case ActionType.SOCKET_CONNECTION_SUCCESS:
      return {
        ...state,
        isSocketConnected: true
      }
    case ActionType.SOCKET_CONNECTION_ERROR:
    case ActionType.SOCKET_CONNECTION_DISCONNECT:
      return {
        ...state,
        isSocketConnected: false
      }
    case ActionType.NEW_CHAT_EVENT:
      return {
        ...state,
        chats: state.chats.concat(payload)
      }
    case ActionType.DELETED_CHAT_EVENT:
      return {
        ...state,
        chats: removeChat(state.chats, payload)
      }
    case ActionType.NEW_MESSAGE_EVENT:
      return {
        ...state,
        messages: state.messages.concat(payload)
      }
    default:
      return state;
  }
}
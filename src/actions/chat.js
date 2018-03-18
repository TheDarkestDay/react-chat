import * as ActionType from '../constants/action-types';
import { logout } from './auth';
import { unmountChat } from './sockets';
import history from '../utils/history';
import backend from '../services/backend';

export function createChat(chatTitle) {
  return (dispatch, getState) => {
    if (getState().isFetching.createChat) {
      return;
    }

    dispatch(createChatRequest());

    backend
      .createChat({ title: chatTitle })
      .then((responseData) => dispatch(createChatSuccess(responseData)))
      .catch((error) => dispatch(createChatError(error)))
  }
}

export function createChatRequest() {
  return {
    type: ActionType.CREATE_CHAT_REQUEST
  }
}

export function createChatSuccess(createdChat) {
  return {
    type: ActionType.CREATE_CHAT_SUCCESS,
    payload: createdChat
  }
}

export function createChatError(error) {
  return {
    type: ActionType.CREATE_CHAT_ERROR,
    payload: error
  };
}

export function getChats() {
  return (dispatch, getState) => {
    if (getState().isFetching.getChats) {
      return;
    }

    dispatch(getChatsRequest());

    backend
      .getChats()
      .then((responseData) => dispatch(getChatsSuccess(responseData)))
      .catch((error) => dispatch(getChatsError(error)))
  };
}

export function getChatsRequest() {
  return {
    type: ActionType.GET_CHATS_REQUEST
  }
}

export function getChatsSuccess(chats) {
  return {
    type: ActionType.GET_CHATS_SUCCESS,
    payload: chats
  }
}

export function getChatsError(error) {
  return {
    type: ActionType.GET_CHATS_ERROR,
    payload: error
  }
}

export function joinChat(chatId) {
  return (dispatch, getState) => {
    if (getState().isFetching.joinChat) {
      return;
    }
    
    dispatch(joinChatRequest());

    backend
      .joinChat(chatId)
      .then((responseData) => dispatch(joinChatSuccess(responseData)))
      .catch((error) => dispatch(joinChatError(error)))
  };
}

export function joinChatRequest() {
  return {
    type: ActionType.JOIN_CHAT_REQUEST
  }
}

export function joinChatSuccess(updatedChat) {
  return {
    type: ActionType.JOIN_CHAT_SUCCESS,
    payload: updatedChat
  }
}

export function joinChatError(error) {
  return {
    type: ActionType.JOIN_CHAT_ERROR,
    payload: error
  }
}

export function leaveChat(chatId) {
  return (dispatch, getState) => {
    if (getState().isFetching.leaveChat) {
      return;
    }

    dispatch(leaveChatRequest());

    backend
      .leaveChat(chatId)
      .then((responseData) => dispatch(leaveChatSuccess(responseData)))
      .catch((error) => dispatch(leaveChatError(error)));
  }
}

export function leaveChatRequest() {
  return {
    type: ActionType.LEAVE_CHAT_REQUEST
  }
}

export function leaveChatSuccess(updatedChat) {
  return {
    type: ActionType.LEAVE_CHAT_SUCCESS,
    payload: updatedChat
  }
}

export function leaveChatError(error) {
  return {
    type: ActionType.LEAVE_CHAT_ERROR,
    payload: error
  }
}

export function deleteChat(chatId) {
  return (dispatch, getState) => {
    if (getState().isFetching.deleteChat) {
      return;
    }

    dispatch(deleteChatRequest());

    backend
      .deleteChat(chatId)
      .then((responseData) => {
        dispatch(deleteChatSuccess(responseData));
        dispatch(unmountChat(chatId));
        history.push('/chat');
      })
      .catch((error) => dispatch(deleteChatError(error)));
  };
}

export function deleteChatRequest() {
  return {
    type: ActionType.DELETE_CHAT_REQUEST
  }
}

export function deleteChatSuccess(removedChat) {
  return {
    type: ActionType.DELETE_CHAT_SUCCESS,
    payload: removedChat
  }
}

export function deleteChatError() {
  return {
    type: ActionType.DELETE_CHAT_ERROR
  }
}

export function getMessages(chatId) {
  return (dispatch, getState) => {
    if (getState().isFetching.getMessages) {
      return;
    }

    dispatch(getMessagesRequest());

    backend
      .getMessages(chatId)
      .then((responseData) => dispatch(getMessagesSuccess(responseData)))
      .catch((error) => dispatch(getMessagesError(error)));
  }
}

export function getMessagesRequest() {
  return {
    type: ActionType.GET_MESSAGES_REQUEST
  }
}

export function getMessagesSuccess(chat) {
  return {
    type: ActionType.GET_MESSAGES_SUCCESS,
    payload: chat.messages
  }
}

export function getMessagesError(error) {
  return {
    type: ActionType.GET_MESSAGES_ERROR,
    payload: error
  }
}

export function setActiveChat(chatId) {
  return {
    type: ActionType.SET_ACTIVE_CHAT,
    payload: chatId
  }
}

export function showAllChats() {
  return {
    type: ActionType.SHOW_ALL_CHATS
  }
}

export function showMyChats() {
  return {
    type: ActionType.SHOW_MY_CHATS
  }
}

export function chatQueryChange(query) {
  return {
    type: ActionType.CHAT_QUERY_CHANGE,
    payload: query
  }
}

export function quit() {
  return (dispatch) => {
    dispatch(logout());
    localStorage.removeItem('token');
    history.push('/');
  }
}
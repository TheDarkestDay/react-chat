import * as ActionType from '../constants/action-types';
import { logout } from './auth';
import history from '../utils/history';
import backend from '../services/backend';

export function createChat(chatTitle) {
  return (dispatch) => {
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
  return (dispatch) => {
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

export function quit() {
  return (dispatch) => {
    dispatch(logout());
    localStorage.removeItem('token');
    history.push('/');
  }
}
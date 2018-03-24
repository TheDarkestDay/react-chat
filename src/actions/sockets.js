import io from 'socket.io-client';

import { WS_ROOT } from '../constants/config';
import * as ActionType from '../constants/action-types';
import history from '../utils/history';

let socket = null;

export function socketConnectionRequest() {
  return {
    type: ActionType.SOCKET_CONNECTION_REQUEST,
  };
}

export function socketConnectionSuccess() {
  return {
    type: ActionType.SOCKET_CONNECTION_SUCCESS,
  };
}

export function socketConnectionError() {
  return {
    type: ActionType.SOCKET_CONNECTION_ERROR,
  };
}

export function socketConnectionDisconnect() {
  return {
    type: ActionType.SOCKET_CONNECTION_DISCONNECT,
  };
}

export function mountChatEvent(chatId) {
  return {
    type: ActionType.MOUNT_CHAT_EVENT,
    payload: chatId,
  };
}

export function mountChat(chatId) {
  return (dispatch, getState) => {
    if (!getState().chat.isSocketConnected) {
      return;
    }

    dispatch(mountChatEvent(chatId));

    socket.emit('mount-chat', chatId);
  };
}

export function sendMessageEvent(chatId, content) {
  return {
    type: ActionType.SEND_MESSAGE_EVENT,
    payload: { chatId, content },
  };
}

export function sendMessage(chatId, content) {
  return (dispatch, getState) => {
    if (!getState().chat.isSocketConnected) {
      return;
    }

    dispatch(sendMessageEvent(chatId, content));

    socket.emit('send-message', {
      chatId,
      content,
    });
  };
}

export function newChatEvent(chat) {
  return {
    type: ActionType.NEW_CHAT_EVENT,
    payload: chat,
  };
}

export function deletedChatEvent(chat) {
  return {
    type: ActionType.DELETED_CHAT_EVENT,
    payload: chat,
  };
}

export function newMessageEvent({ message }) {
  return {
    type: ActionType.NEW_MESSAGE_EVENT,
    payload: message,
  };
}

export function unmountChatEvent(chatId) {
  return {
    type: ActionType.UNMOUNT_CHAT_EVENT,
    payload: chatId,
  };
}

export function unmountChat(chatId) {
  return (dispatch, getState) => {
    if (!getState().chat.isSocketConnected) {
      return;
    }

    dispatch(unmountChatEvent(chatId));

    socket.emit('unmount-chat', chatId);
  };
}

export function initSocketConnection() {
  return (dispatch, getState) => {
    if (getState().chat.isSocketConnected) {
      return;
    }

    dispatch(socketConnectionRequest());

    socket = io(WS_ROOT, {
      query: {
        token: localStorage.getItem('token'),
      },
    });

    socket.on('connect', () => {
      dispatch(socketConnectionSuccess());
    });

    socket.on('error', () => {
      dispatch(socketConnectionError());
    });

    socket.on('disconnect', () => {
      dispatch(socketConnectionDisconnect());
    });

    socket.on('new-chat', ({ chat }) => {
      dispatch(newChatEvent(chat));
    });

    socket.on('deleted-chat', ({ chat }) => {
      /* eslint-disable-next-line */
      if (getState().chat.activeChatId === chat._id) {
        history.push('/chat');
      }

      dispatch(deletedChatEvent(chat));
    });

    socket.on('new-message', (message) => {
      dispatch(newMessageEvent(message));
    });
  };
}

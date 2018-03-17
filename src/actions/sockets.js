import io from 'socket.io-client';

import { WS_ROOT } from '../constants/config';
import * as ActionType from '../constants/action-types';

let socket = null;

export function initSocketConnection() {
    return (dispatch, getState) => {
        if (getState().chat.isSocketConnected) {
            return;
        }

        dispatch(socketConnectionRequest());

        socket = io(WS_ROOT, {
            query: {
                token: localStorage.getItem('token')
            }
        });
    
        socket.on('connect', () => {
            dispatch(socketConnectionSuccess());
        });
    
        socket.on('error', (error) => {
            dispatch(socketConnectionError());
        });
    
        socket.on('disconnect', (error) => {
            dispatch(socketConnectionDisconnect());
        });

        socket.on('new-chat', ({ chat }) => {
            dispatch(newChatEvent(chat));
        });

        socket.on('deleted-chat', ({ chat }) => {
            dispatch(deletedChatEvent(chat));
        });
    }
}

export function socketConnectionRequest() {
    return {
        type: ActionType.SOCKET_CONNECTION_REQUEST
    }
}

export function socketConnectionSuccess() {
    return {
        type: ActionType.SOCKET_CONNECTION_SUCCESS
    }
}

export function socketConnectionError() {
    return {
        type: ActionType.SOCKET_CONNECTION_ERROR
    }
}

export function socketConnectionDisconnect() {
    return {
        type: ActionType.SOCKET_CONNECTION_DISCONNECT
    }
}

export function newChatEvent(chat) {
    return {
        type: ActionType.NEW_CHAT_EVENT,
        payload: chat
    }
}

export function deletedChatEvent(chat) {
    return {
        type: ActionType.DELETED_CHAT_EVENT,
        payload: chat
    }
}
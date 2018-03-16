import io from 'socket.io-client';

import { WS_ROOT } from '../constants/config';
import * as ActionType from '../constants/action-types';

let socket = null;

export function initSocketConnection() {
    return (dispatch) => {
        dispatch(socketConnectionRequest());

        socket = io(WS_ROOT, {
            query: {
                token: localStorage.getItem('token')
            }
        });
    
        socket.on('connect', () => {
            console.log('Connected successfully');
        });
    
        socket.on('new-chat', ({ chat }) => {
            dispatch(newChatEvent(chat));
        });
    
        socket.on('error', (error) => {
            console.log(error);
        });
    
        socket.on('disconnect', (error) => {
            console.log('Disconnnected', error);
        });
    }
}

export function socketConnectionRequest() {
    return {
        type: ActionType.SOCKET_CONNECTION_REQUEST
    }
}

export function newChatEvent(chat) {
    return {
        type: ActionType.NEW_CHAT_EVENT,
        payload: chat
    }
}
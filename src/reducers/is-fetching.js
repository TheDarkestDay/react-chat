import * as ActionType from '../constants/action-types';

const initialState = {
    login: false,
    signup: false,
    getWhoami: false,
    getChats: false,
    createChat: false,
    joinChat: false,
    leaveChat: false,
    deleteChat: false,
    editUser: false
};

export default function isFetching(state = initialState, action) {
    const { type } = action;

    switch(type) {
        case ActionType.LOGIN_REQUEST:
            return {
                ...state,
                login: true
            }
        case ActionType.LOGIN_SUCCESS:
        case ActionType.LOGIN_ERROR:
            return {
                ...state,
                login: false
            }
        case ActionType.SIGNUP_REQUEST:
            return {
                ...state,
                signup: true
            }
        case ActionType.SIGNUP_SUCCESS:
        case ActionType.SIGNUP_ERROR:
            return {
                ...state,
                signup: false
            }
        case ActionType.WHOAMI_REQUEST:
            return {
                ...state,
                getWhoami: true
            }
        case ActionType.WHOAMI_SUCCESS:
        case ActionType.WHOAMI_ERROR:
            return {
                ...state,
                getWhoami: false
            }
        case ActionType.GET_CHATS_REQUEST:
            return {
                ...state,
                getChats: true
            }
        case ActionType.GET_CHATS_SUCCESS:
        case ActionType.GET_CHATS_ERROR:
            return {
                ...state,
                getChats: false
            }
        case ActionType.CREATE_CHAT_REQUEST:
            return {
                ...state,
                createChat: true
            }
        case ActionType.CREATE_CHAT_SUCCESS:
        case ActionType.CREATE_CHAT_ERROR:
            return {
                ...state,
                createChat: false
            }
        case ActionType.JOIN_CHAT_REQUEST:
            return {
                ...state,
                joinChat: true
            }
        case ActionType.JOIN_CHAT_SUCCESS:
        case ActionType.JOIN_CHAT_ERROR:
            return {
                ...state,
                joinChat: false
            }
        case ActionType.LEAVE_CHAT_REQUEST:
            return {
                ...state,
                leaveChat: true
            }
        case ActionType.LEAVE_CHAT_SUCCESS:
        case ActionType.LEAVE_CHAT_ERROR:
            return {
                ...state,
                leaveChat: false
            }
        case ActionType.DELETE_CHAT_REQUEST:
            return {
                ...state,
                deleteChat: true
            }
        case ActionType.DELETE_CHAT_SUCCESS:
        case ActionType.DELETE_CHAT_ERROR:
            return {
                ...state,
                deleteChat: false
            }
        case ActionType.EDIT_USER_REQUEST:
            return {
                ...state,
                editUser: true
            }
        case ActionType.EDIT_USER_SUCCESS:
        case ActionType.EDIT_USER_ERROR:
            return {
                ...state,
                editUser: false
            }
        default:
            return state;
    }
}


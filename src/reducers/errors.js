import * as ActionType from '../constants/action-types';

const initialState = {
    errorMessage: null,
    isErrorMessageShown: false
}

export default function errors(state = initialState, action) {
    const { type, payload } = action;

    switch (type) {
        case ActionType.LOGIN_ERROR:
        case ActionType.SIGNUP_ERROR:
        case ActionType.WHOAMI_ERROR:
        case ActionType.GET_CHATS_ERROR:
        case ActionType.GET_MESSAGES_ERROR:
        case ActionType.JOIN_CHAT_ERROR:
        case ActionType.DELETE_CHAT_ERROR:
        case ActionType.LEAVE_CHAT_ERROR:
        case ActionType.EDIT_USER_ERROR:
        case ActionType.CREATE_CHAT_ERROR:
            return {
                ...state,
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


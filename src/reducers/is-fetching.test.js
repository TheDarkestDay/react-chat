/* eslint-env jest */
import reducer from './is-fetching';
import * as ActionType from '../constants/action-types';

const mapRequestActionToKey = {
  [ActionType.LOGIN_REQUEST]: 'login',
  [ActionType.SIGNUP_REQUEST]: 'signup',
  [ActionType.WHOAMI_REQUEST]: 'getWhoami',
  [ActionType.CREATE_CHAT_REQUEST]: 'createChat',
  [ActionType.JOIN_CHAT_REQUEST]: 'joinChat',
  [ActionType.DELETE_CHAT_REQUEST]: 'deleteChat',
  [ActionType.LEAVE_CHAT_REQUEST]: 'leaveChat',
  [ActionType.EDIT_USER_REQUEST]: 'editUser',
  [ActionType.GET_CHATS_REQUEST]: 'getChats',
};

const initialState = {
  login: false,
  signup: false,
  getWhoami: false,
  getChats: false,
  createChat: false,
  joinChat: false,
  leaveChat: false,
  deleteChat: false,
  editUser: false,
  getMessages: false,
};

describe('is-fetching reducer', () => {
  it('should return initial state', () => {
    expect(reducer(undefined, {})).toEqual(initialState);
  });

  Object.keys(mapRequestActionToKey).forEach((action) => {
    it(`should handle ${action} action`, () => {
      const actualState = reducer(undefined, { type: action });
      const targetKey = mapRequestActionToKey[action];
      expect(actualState[targetKey]).toEqual(true);
    });
  });

  it('should handle SIGNUP_SUCCESS action', () => {
    const stateMock = {
      ...initialState,
      signup: true,
    };

    expect(reducer(stateMock, { type: ActionType.SIGNUP_SUCCESS })).toEqual({
      ...initialState,
      signup: false,
    });
  });

  it('should handle SIGNUP_ERROR action', () => {
    const stateMock = {
      ...initialState,
      signup: true,
    };

    expect(reducer(stateMock, { type: ActionType.SIGNUP_ERROR })).toEqual({
      ...initialState,
      signup: false,
    });
  });

  it('should handle LOGIN_SUCCESS action', () => {
    const stateMock = {
      ...initialState,
      login: true,
    };

    expect(reducer(stateMock, { type: ActionType.LOGIN_SUCCESS })).toEqual({
      ...initialState,
      login: false,
    });
  });

  it('should handle LOGIN_ERROR action', () => {
    const stateMock = {
      ...initialState,
      login: true,
    };

    expect(reducer(stateMock, { type: ActionType.LOGIN_ERROR })).toEqual({
      ...initialState,
      login: false,
    });
  });

  it('should handle WHOAMI_SUCCESS action', () => {
    const stateMock = {
      ...initialState,
      getWhoami: true,
    };

    expect(reducer(stateMock, { type: ActionType.WHOAMI_SUCCESS })).toEqual({
      ...initialState,
      getWhoami: false,
    });
  });

  it('should handle WHOAMI_ERROR action', () => {
    const stateMock = {
      ...initialState,
      getWhoami: true,
    };

    expect(reducer(stateMock, { type: ActionType.WHOAMI_ERROR })).toEqual({
      ...initialState,
      getWhoami: false,
    });
  });

  it('should handle EDIT_USER_SUCCESS action', () => {
    const stateMock = {
      ...initialState,
      editUser: true,
    };

    expect(reducer(stateMock, { type: ActionType.EDIT_USER_SUCCESS })).toEqual({
      ...initialState,
      editUser: false,
    });
  });

  it('should handle EDIT_USER_ERROR action', () => {
    const stateMock = {
      ...initialState,
      editUser: true,
    };

    expect(reducer(stateMock, { type: ActionType.EDIT_USER_ERROR })).toEqual({
      ...initialState,
      editUser: false,
    });
  });

  it('should handle GET_CHATS_SUCCESS action', () => {
    const stateMock = {
      ...initialState,
      getChats: true,
    };

    expect(reducer(stateMock, { type: ActionType.GET_CHATS_SUCCESS })).toEqual({
      ...initialState,
      getChats: false,
    });
  });

  it('should handle GET_CHATS_ERROR action', () => {
    const stateMock = {
      ...initialState,
      getChats: true,
    };

    expect(reducer(stateMock, { type: ActionType.GET_CHATS_ERROR })).toEqual({
      ...initialState,
      getChats: false,
    });
  });

  it('should handle CREATE_CHAT_SUCCESS action', () => {
    const stateMock = {
      ...initialState,
      createChat: true,
    };

    expect(reducer(stateMock, { type: ActionType.CREATE_CHAT_SUCCESS })).toEqual({
      ...initialState,
      createChat: false,
    });
  });

  it('should handle CREATE_CHAT_ERROR action', () => {
    const stateMock = {
      ...initialState,
      createChat: true,
    };

    expect(reducer(stateMock, { type: ActionType.CREATE_CHAT_ERROR })).toEqual({
      ...initialState,
      createChat: false,
    });
  });

  it('should handle JOIN_CHAT_SUCCESS action', () => {
    const stateMock = {
      ...initialState,
      joinChat: true,
    };

    expect(reducer(stateMock, { type: ActionType.JOIN_CHAT_SUCCESS })).toEqual({
      ...initialState,
      joinChat: false,
    });
  });

  it('should handle JOIN_CHAT_ERROR action', () => {
    const stateMock = {
      ...initialState,
      joinChat: true,
    };

    expect(reducer(stateMock, { type: ActionType.JOIN_CHAT_ERROR })).toEqual({
      ...initialState,
      joinChat: false,
    });
  });

  it('should handle LEAVE_CHAT_SUCCESS action', () => {
    const stateMock = {
      ...initialState,
      leaveChat: true,
    };

    expect(reducer(stateMock, { type: ActionType.LEAVE_CHAT_SUCCESS })).toEqual({
      ...initialState,
      leaveChat: false,
    });
  });

  it('should handle LEAVE_CHAT_ERROR action', () => {
    const stateMock = {
      ...initialState,
      leaveChat: true,
    };

    expect(reducer(stateMock, { type: ActionType.LEAVE_CHAT_ERROR })).toEqual({
      ...initialState,
      leaveChat: false,
    });
  });

  it('should handle DELETE_CHAT_SUCCESS action', () => {
    const stateMock = {
      ...initialState,
      deleteChat: true,
    };

    expect(reducer(stateMock, { type: ActionType.DELETE_CHAT_SUCCESS })).toEqual({
      ...initialState,
      deleteChat: false,
    });
  });

  it('should handle DELETE_CHAT_ERROR action', () => {
    const stateMock = {
      ...initialState,
      deleteChat: true,
    };

    expect(reducer(stateMock, { type: ActionType.DELETE_CHAT_ERROR })).toEqual({
      ...initialState,
      deleteChat: false,
    });
  });

  it('should handle GET_MESSAGES_SUCCESS action', () => {
    const stateMock = {
      ...initialState,
      getMessages: true,
    };

    expect(reducer(stateMock, { type: ActionType.GET_MESSAGES_SUCCESS })).toEqual({
      ...initialState,
      getMessages: false,
    });
  });

  it('should handle GET_MESSAGES_ERROR action', () => {
    const stateMock = {
      ...initialState,
      getMessages: true,
    };

    expect(reducer(stateMock, { type: ActionType.GET_MESSAGES_ERROR })).toEqual({
      ...initialState,
      getMessages: false,
    });
  });
});

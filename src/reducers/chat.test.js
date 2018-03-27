/* eslint-env jest */
import reducer from './chat';
import * as ActionType from '../constants/action-types';

import { userMock } from '../mocks';

describe('Chat reducer', () => {
  it('should return initial state', () => {
    expect(reducer(undefined, {})).toEqual({
      activeChatId: '',
      chats: [],
      chatQuery: '',
      isAllChatsAreDisplayed: false,
      isSocketConnected: false,
      messages: [],
    });
  });

  it('should set active chat', () => {
    expect(reducer(undefined, { type: ActionType.SET_ACTIVE_CHAT, payload: '1' })).toEqual({
      activeChatId: '1',
      chats: [],
      chatQuery: '',
      isAllChatsAreDisplayed: false,
      isSocketConnected: false,
      messages: [],
    });
  });

  it('should show my chats', () => {
    expect(reducer(undefined, { type: ActionType.SHOW_MY_CHATS })).toEqual({
      activeChatId: '',
      chats: [],
      chatQuery: '',
      isAllChatsAreDisplayed: false,
      isSocketConnected: false,
      messages: [],
    });
  });

  it('should show all chats', () => {
    expect(reducer(undefined, { type: ActionType.SHOW_ALL_CHATS })).toEqual({
      activeChatId: '',
      chats: [],
      chatQuery: '',
      isAllChatsAreDisplayed: true,
      isSocketConnected: false,
      messages: [],
    });
  });

  it('should change chat query', () => {
    expect(reducer(undefined, { type: ActionType.CHAT_QUERY_CHANGE, payload: 'query' })).toEqual({
      activeChatId: '',
      chats: [],
      chatQuery: 'query',
      isAllChatsAreDisplayed: false,
      isSocketConnected: false,
      messages: [],
    });
  });

  it('should handle joining chat', () => {
    const stateMock = {
      activeChatId: '',
      chats: [
        {
          _id: '1',
          members: [],
        },
      ],
      chatQuery: 'query',
      isAllChatsAreDisplayed: false,
      isSocketConnected: false,
      messages: [],
    };

    const payloadMock = {
      _id: '1',
      members: [userMock],
    };

    expect(reducer(stateMock, {
      type: ActionType.JOIN_CHAT_SUCCESS,
      payload: payloadMock,
    })).toEqual({
      activeChatId: '',
      chats: [
        {
          _id: '1',
          members: [userMock],
        },
      ],
      chatQuery: 'query',
      isAllChatsAreDisplayed: false,
      isSocketConnected: false,
      messages: [],
    });
  });

  it('should hadle get chat success', () => {
    const stateMock = {
      activeChatId: '',
      chats: [],
      chatQuery: 'query',
      isAllChatsAreDisplayed: false,
      isSocketConnected: false,
      messages: [],
    };

    const payloadMock = ['Message #1', 'Message #2', 'Message #3'];

    expect(reducer(stateMock, {
      type: ActionType.GET_MESSAGES_SUCCESS,
      payload: payloadMock,
    })).toEqual({
      activeChatId: '',
      chats: [],
      chatQuery: 'query',
      isAllChatsAreDisplayed: false,
      isSocketConnected: false,
      messages: ['Message #1', 'Message #2', 'Message #3'],
    });
  });

  it('should handle delete chat success', () => {
    const stateMock = {
      activeChatId: '',
      chats: [
        {
          _id: '1',
          members: [],
        },
      ],
      chatQuery: 'query',
      isAllChatsAreDisplayed: false,
      isSocketConnected: false,
      messages: [],
    };

    const payloadMock = {
      _id: '1',
    };

    expect(reducer(stateMock, {
      type: ActionType.DELETE_CHAT_SUCCESS,
      payload: payloadMock,
    })).toEqual({
      activeChatId: '',
      chats: [],
      chatQuery: 'query',
      isAllChatsAreDisplayed: false,
      isSocketConnected: false,
      messages: [],
    });
  });

  it('should handle chat leave success', () => {
    const stateMock = {
      activeChatId: '',
      chats: [
        {
          _id: '1',
          members: [userMock],
        },
      ],
      chatQuery: 'query',
      isAllChatsAreDisplayed: false,
      isSocketConnected: false,
      messages: [],
    };

    const payloadMock = {
      _id: '1',
    };

    expect(reducer(stateMock, {
      type: ActionType.LEAVE_CHAT_SUCCESS,
      payload: payloadMock,
    })).toEqual({
      activeChatId: '',
      chats: [
        {
          _id: '1',
        },
      ],
      chatQuery: 'query',
      isAllChatsAreDisplayed: false,
      isSocketConnected: false,
      messages: [],
    });
  });

  it('should handle socket connection success', () => {
    expect(reducer(undefined, { type: ActionType.SOCKET_CONNECTION_SUCCESS })).toEqual({
      activeChatId: '',
      chats: [],
      chatQuery: '',
      isAllChatsAreDisplayed: false,
      isSocketConnected: true,
      messages: [],
    });
  });

  it('should handle socket connection error', () => {
    expect(reducer(undefined, { type: ActionType.SOCKET_CONNECTION_ERROR })).toEqual({
      activeChatId: '',
      chats: [],
      chatQuery: '',
      isAllChatsAreDisplayed: false,
      isSocketConnected: false,
      messages: [],
    });
  });

  it('should handle socket connection disconnect', () => {
    expect(reducer(undefined, { type: ActionType.SOCKET_CONNECTION_DISCONNECT })).toEqual({
      activeChatId: '',
      chats: [],
      chatQuery: '',
      isAllChatsAreDisplayed: false,
      isSocketConnected: false,
      messages: [],
    });
  });

  it('should handle new chat event', () => {
    const payloadMock = {
      _id: '1',
      title: 'New chat',
    };
    expect(reducer(undefined, { type: ActionType.NEW_CHAT_EVENT, payload: payloadMock })).toEqual({
      activeChatId: '',
      chats: [
        {
          _id: '1',
          title: 'New chat',
        },
      ],
      chatQuery: '',
      isAllChatsAreDisplayed: false,
      isSocketConnected: false,
      messages: [],
    });
  });

  it('should handle deleted chat event', () => {
    const stateMock = {
      activeChatId: '',
      chats: [
        {
          _id: '1',
          title: 'New chat',
        },
      ],
      chatQuery: '',
      isAllChatsAreDisplayed: false,
      isSocketConnected: false,
      messages: [],
    };

    const payloadMock = {
      _id: '1',
    };

    expect(reducer(stateMock, {
      type: ActionType.DELETED_CHAT_EVENT,
      payload: payloadMock,
    })).toEqual({
      activeChatId: '',
      chats: [],
      chatQuery: '',
      isAllChatsAreDisplayed: false,
      isSocketConnected: false,
      messages: [],
    });
  });

  it('should handle new message event', () => {
    const payloadMock = {
      _id: '1',
      content: 'Hello, world!',
      sender: userMock,
    };

    expect(reducer(undefined, {
      type: ActionType.NEW_MESSAGE_EVENT,
      payload: payloadMock,
    })).toEqual({
      activeChatId: '',
      chats: [],
      chatQuery: '',
      isAllChatsAreDisplayed: false,
      isSocketConnected: false,
      messages: [
        {
          _id: '1',
          content: 'Hello, world!',
          sender: userMock,
        },
      ],
    });
  });
});

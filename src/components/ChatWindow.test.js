/* eslint-env jest */
import React from 'react';
import ReactDOM from 'react-dom';
import ChatWindow from './ChatWindow';

import { userMock } from '../mocks';

jest.mock('./dialogs/EditUserDialog', () => () => 'EditUserDialog');

it('renders without crashing', () => {
  const chatWindowPropsMock = {
    initSocketConnection: () => {},
    unmountChat: () => {},
    setActiveChat: () => {},
    getMessages: () => {},
    mountChat: () => {},
    deleteChat: () => {},
    editUser: () => {},
    joinChat: () => {},
    leaveChat: () => {},
    quit: () => {},
    sendMessage: () => {},
    messages: [],
    isAllowedToSendMessages: true,
    isSocketConnected: true,
    isCreator: true,
    user: userMock,
  };

  const div = document.createElement('div');
  ReactDOM.render(<ChatWindow {...chatWindowPropsMock} />, div);
  ReactDOM.unmountComponentAtNode(div);
});

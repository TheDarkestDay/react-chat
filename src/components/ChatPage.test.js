/* eslint-env jest */
import React from 'react';
import ReactDOM from 'react-dom';
import ChatPage from './ChatPage';

jest.mock('../containers/Sidebar', () => () => 'Sidebar');
jest.mock('../containers/ChatWindow', () => () => 'ChatWindow');

const matchMock = {
  params: {
    id: '1',
  },
};

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<ChatPage match={matchMock} />, div);
  ReactDOM.unmountComponentAtNode(div);
});

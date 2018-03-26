/* eslint-env jest */
import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import Sidebar from './Sidebar';

it('renders without crashing', () => {
  const sidebarPropsMock = {
    chats: [],
    chatQuery: '',
    isSocketConnected: true,
    getChats: () => {},
    showMyChats: () => {},
    showAllChats: () => {},
    searchChats: () => {},
    createChat: () => {},
  };

  const div = document.createElement('div');
  ReactDOM.render(<Sidebar {...sidebarPropsMock} />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('should match snapshot', () => {
  const sidebarPropsMock = {
    chats: [],
    chatQuery: '',
    isSocketConnected: true,
    getChats: () => {},
    showMyChats: () => {},
    showAllChats: () => {},
    searchChats: () => {},
    createChat: () => {},
  };

  const tree = renderer.create(<Sidebar {...sidebarPropsMock} />).toJSON();
  expect(tree).toMatchSnapshot();
});

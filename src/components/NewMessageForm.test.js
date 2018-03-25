/* eslint-env jest */
import React from 'react';
import ReactDOM from 'react-dom';
import NewMessageForm from './NewMessageForm';

it('renders without crashing', () => {
  const newMessageFormPropsMock = {
    disabled: false,
    isAllowedToSendMessages: true,
    joinChat: () => {},
    sendMessage: () => {},
  };

  const div = document.createElement('div');
  ReactDOM.render(<NewMessageForm {...newMessageFormPropsMock} />, div);
  ReactDOM.unmountComponentAtNode(div);
});

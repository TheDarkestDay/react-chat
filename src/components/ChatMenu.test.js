/* eslint-env jest */
import React from 'react';
import ReactDOM from 'react-dom';
import ChatMenu from './ChatMenu';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <ChatMenu isCreator onChatDelete={() => 'Chat deleted'} onChatLeave={() => 'Chat leave'} />,
    div,
  );
  ReactDOM.unmountComponentAtNode(div);
});

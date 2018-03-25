/* eslint-env jest */
import React from 'react';
import ReactDOM from 'react-dom';
import MessagesList from './MessagesList';

import { userMock } from '../mocks';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<MessagesList messages={[]} user={userMock} />, div);
  ReactDOM.unmountComponentAtNode(div);
});

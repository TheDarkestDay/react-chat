/* eslint-env jest */
import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import ChatMessage from './ChatMessage';

import { userMock } from '../mocks';

jest.mock('../services/generate-last-activity-message', () => () => '2 days ago');

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <ChatMessage
      sender={userMock}
      user={userMock}
      content="Hello, world!"
      createdAt="01-01-1990"
    />,
    div,
  );
  ReactDOM.unmountComponentAtNode(div);
});

it('should match snapshot', () => {
  const tree = renderer
    .create(<ChatMessage
      sender={userMock}
      user={userMock}
      content="Hello, world!"
      createdAt="01-01-1990"
    />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});

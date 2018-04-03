/* eslint-env jest */
import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import MessagesList from './MessagesList';

import { userMock } from '../mocks';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<MessagesList messages={[]} user={userMock} />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('should match snapshot', () => {
  const tree = renderer.create(<MessagesList messages={[]} user={userMock} />).toJSON();
  expect(tree).toMatchSnapshot();
});

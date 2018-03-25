/* eslint-env jest */
import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import StatusMessage from './StatusMessage';

import { userMock } from '../mocks';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<StatusMessage content="joined" createdAt="01-01-1990" sender={userMock} />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('should match snapshot', () => {
  const tree = renderer
    .create(<StatusMessage content="joined" createdAt="01-01-1990" sender={userMock} />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});

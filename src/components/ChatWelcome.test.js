/* eslint-env jest */
import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import ChatWelcome from './ChatWelcome';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<ChatWelcome />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('should match snapshot', () => {
  const tree = renderer.create(<ChatWelcome />).toJSON();
  expect(tree).toMatchSnapshot();
});

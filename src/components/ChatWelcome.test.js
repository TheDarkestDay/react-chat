/* eslint-env jest */
import React from 'react';
import ReactDOM from 'react-dom';
import ChatWelcome from './ChatWelcome';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<ChatWelcome />, div);
  ReactDOM.unmountComponentAtNode(div);
});

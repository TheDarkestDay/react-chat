/* eslint-env jest */
import React from 'react';
import ReactDOM from 'react-dom';
import SignupForm from './SignupForm';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<SignupForm signup={() => {}} signupError={() => {}} />, div);
  ReactDOM.unmountComponentAtNode(div);
});

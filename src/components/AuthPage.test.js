/* eslint-env jest */
import React from 'react';
import ReactDOM from 'react-dom';
import AuthPage from './AuthPage';

jest.mock('react-router-dom', () => ({
  Redirect: () => 'Redirect',
}));

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<AuthPage isAuthenticated isRequestInProgress />, div);
  ReactDOM.unmountComponentAtNode(div);
});

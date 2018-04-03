/* eslint-env jest */
import React from 'react';
import ReactDOM from 'react-dom';
import PrivateRoute from './PrivateRoute';

jest.mock('react-router-dom', () => ({
  Route: () => 'Route',
}));

it('renders without crashing', () => {
  const privateRoutePropTypesMock = {
    component: () => 'Component',
    isAuthenticated: true,
    getWhoami: () => {},
  };

  const div = document.createElement('div');
  ReactDOM.render(<PrivateRoute {...privateRoutePropTypesMock} />, div);
  ReactDOM.unmountComponentAtNode(div);
});

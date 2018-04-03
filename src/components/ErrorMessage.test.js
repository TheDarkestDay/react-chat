/* eslint-env jest */
import React from 'react';
import ReactDOM from 'react-dom';
import ErrorMessage from './ErrorMessage';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <ErrorMessage closeSnackbar={() => {}} errorMessage="Some error" isErrorMessageShown />,
    div,
  );
  ReactDOM.unmountComponentAtNode(div);
});

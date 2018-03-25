/* eslint-env jest */
import React from 'react';
import ReactDOM from 'react-dom';
import EditUserDialog from './EditUserDialog';

import { userMock } from '../../mocks';

it('renders without crashing', () => {
  const EditUserDialogPropsMock = {
    disabled: false,
    isOpened: true,
    onClose: () => {},
    onDone: () => {},
    userInfo: userMock,
  };

  const div = document.createElement('div');
  ReactDOM.render(<EditUserDialog {...EditUserDialogPropsMock} />, div);
  ReactDOM.unmountComponentAtNode(div);
});

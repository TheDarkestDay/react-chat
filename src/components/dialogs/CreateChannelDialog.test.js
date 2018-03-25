/* eslint-env jest */
import React from 'react';
import ReactDOM from 'react-dom';
import CreateChannelDialog from './CreateChannelDialog';

it('renders without crashing', () => {
  const createChannelDialogPropsMock = {
    disabled: false,
    isOpened: true,
    onClose: () => {},
    onDone: () => {},
  };

  const div = document.createElement('div');
  ReactDOM.render(<CreateChannelDialog {...createChannelDialogPropsMock} />, div);
  ReactDOM.unmountComponentAtNode(div);
});

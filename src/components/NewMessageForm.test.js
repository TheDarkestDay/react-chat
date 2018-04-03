/* eslint-env jest */
import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import NewMessageForm from './NewMessageForm';

it('renders without crashing', () => {
  const newMessageFormPropsMock = {
    disabled: false,
    isAllowedToSendMessages: true,
    joinChat: () => {},
    sendMessage: () => {},
  };

  const div = document.createElement('div');
  ReactDOM.render(<NewMessageForm {...newMessageFormPropsMock} />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('should match snapshot', () => {
  const newMessageFormPropsMock = {
    disabled: false,
    isAllowedToSendMessages: true,
    joinChat: () => {},
    sendMessage: () => {},
  };

  const tree = renderer.create(<NewMessageForm {...newMessageFormPropsMock} />).toJSON();
  expect(tree).toMatchSnapshot();
});

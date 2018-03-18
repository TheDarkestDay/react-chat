import { connect } from 'react-redux';

import { deleteChat, getMessages, joinChat, leaveChat, quit, setActiveChat } from '../actions/chat';
import { initSocketConnection, mountChat, sendMessage, unmountChat } from '../actions/sockets';
import { getActiveChat, isAllowedToSendMessages, isCreator } from '../selectors';
import ChatWindow from '../components/ChatWindow';

const mapStateToProps = (state) => {
  return {
    activeChat: getActiveChat(state),
    messages: state.chat.messages,
    isAllowedToSendMessages: isAllowedToSendMessages(state),
    isCreator: isCreator(state),
    isSocketConnected: state.chat.isSocketConnected,
    user: state.auth.user
  }
}
 
const mapDispatchToProps = (dispatch) => {
  return {
    deleteChat: (chatId) => {
      dispatch(deleteChat(chatId));
    },
    initSocketConnection: () => {
      dispatch(initSocketConnection());
    },
    joinChat: (chatId) => {
      dispatch(joinChat(chatId));
    },
    leaveChat: (chatId) => {
      dispatch(leaveChat(chatId));
    },
    quit: () => {
      dispatch(quit());
    },
    setActiveChat: (chatId) => {
      dispatch(setActiveChat(chatId));
    },
    sendMessage: (chatId, content) => {
      dispatch(sendMessage(chatId, content));
    },
    getMessages: (chatId) => {
      dispatch(getMessages(chatId));
    },
    mountChat: (chatId) => {
      dispatch(mountChat(chatId));
    },
    unmountChat: (chatId) => {
      dispatch(unmountChat(chatId));
    }
  }
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ChatWindow);
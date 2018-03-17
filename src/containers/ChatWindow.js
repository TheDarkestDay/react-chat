import { connect } from 'react-redux';

import { deleteChat, joinChat, leaveChat, quit, setActiveChat } from '../actions/chat';
import { initSocketConnection } from '../actions/sockets';
import { getActiveChat, isAllowedToSendMessages, isCreator } from '../selectors';
import ChatWindow from '../components/ChatWindow';

const mapStateToProps = (state) => {
  return {
    isAllowedToSendMessages: isAllowedToSendMessages(state),
    isCreator: isCreator(state),
    isSocketConnected: state.chat.isSocketConnected,
    activeChat: getActiveChat(state)
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
    }
  }
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ChatWindow);
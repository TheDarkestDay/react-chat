import { connect } from 'react-redux';

import { joinChat, quit, setActiveChat } from '../actions/chat';
import { isAllowedToSendMessages } from '../selectors';
import ChatWindow from '../components/ChatWindow';

const mapStateToProps = (state) => {
  return {
    isAllowedToSendMessages: isAllowedToSendMessages(state)
  }
}
 
const mapDispatchToProps = (dispatch) => {
  return {
    joinChat: (chatId) => {
      dispatch(joinChat(chatId));
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
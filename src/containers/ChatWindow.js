import { connect } from 'react-redux';

import { joinChat, quit, setActiveChat } from '../actions/chat';
import { isMember } from '../selectors';
import ChatWindow from '../components/ChatWindow';

const mapStateToProps = (state) => {
  return {
    isMember: isMember(state)
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
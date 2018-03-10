import { connect } from 'react-redux';

import { createChat } from '../actions/chat';
import Sidebar from '../components/Sidebar';

const mapStateToProps = (state) => {
  return {
    chats: state.chat.chats
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    createChat: (chatData) => {
      dispatch(createChat(chatData));
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Sidebar);
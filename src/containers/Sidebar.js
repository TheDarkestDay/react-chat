import { connect } from 'react-redux';

import { createChat, getChats, showAllChats, showMyChats } from '../actions/chat';
import { getVisibleChats } from '../selectors';
import Sidebar from '../components/Sidebar';

const mapStateToProps = (state) => {
  return {
    chats: getVisibleChats(state)
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    createChat: (chatData) => {
      dispatch(createChat(chatData));
    },
    getChats: () => {
      dispatch(getChats());
    },
    showAllChats: () => {
      dispatch(showAllChats());
    },
    showMyChats: () => {
      dispatch(showMyChats());
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Sidebar);
import { connect } from 'react-redux';

import { createChat, chatQueryChange, getChats, showAllChats, showMyChats } from '../actions/chat';
import { getVisibleChats } from '../selectors';
import Sidebar from '../components/Sidebar';

const mapStateToProps = state => ({
  chats: getVisibleChats(state),
  chatQuery: state.chat.chatQuery,
  isSocketConnected: state.chat.isSocketConnected,
});

const mapDispatchToProps = dispatch => ({
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
  },
  searchChats: (query) => {
    dispatch(chatQueryChange(query));
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Sidebar);

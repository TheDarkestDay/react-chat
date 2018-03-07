import { connect } from 'react-redux';

import { quit } from '../actions/chat';
import ChatWindow from '../components/ChatWindow';
 
const mapDispatchToProps = (dispatch) => {
  return {
    quit: () => {
      dispatch(quit());
    }
  }
};

export default connect(
  null,
  mapDispatchToProps
)(ChatWindow);
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';

import { Message, User } from '../constants/shapes';
import ChatMessage from './ChatMessage';
import StatusMessage from './StatusMessage';

const chatHeaderHeight = '64px';
const newMessageFormHeight = '64px';

const styles = () => ({
  messagesList: {
    overflow: 'auto',
    maxHeight: `calc(100vh - ${chatHeaderHeight} - ${newMessageFormHeight})`,
    flexGrow: 1,
  },
});

class MessagesList extends Component {
  static propTypes = {
    classes: PropTypes.objectOf(PropTypes.string).isRequired,
    messages: PropTypes.arrayOf(Message).isRequired,
    user: User.isRequired,
  }

  componentWillReceiveProps() {
    if (this.messagesList) {
      requestAnimationFrame(() => this.messagesList.scrollTo(0, this.messagesList.scrollHeight));
    }
  }

  initMessagesList = (messagesListRef) => {
    this.messagesList = messagesListRef;
  }

  render() {
    const { classes, messages, user } = this.props;

    return (
      <section className={classes.messagesList} ref={this.initMessagesList}>
        {
          messages.map(message => (
            message.statusMessage
              ? <StatusMessage key={message._id} {...message} />
              : <ChatMessage key={message._id} user={user} {...message} />
          ))
        }
      </section>
    );
  }
}

export default withStyles(styles)(MessagesList);

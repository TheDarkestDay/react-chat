import React, { Component } from 'react';
import { withStyles } from 'material-ui/styles';

import ChatMessage from './ChatMessage';
import StatusMessage from './StatusMessage';

const chatHeaderHeight = '64px';
const newMessageFormHeight = '64px';

const styles = () => ({
  messagesList: {
    overflow: 'auto',
    maxHeight: `calc(100vh - ${chatHeaderHeight} - ${newMessageFormHeight})`,
    flexGrow: 1
  }
});

class MessagesList extends Component {
  render() {
    const { classes, messages, user } = this.props;

    return (
      <section className={classes.messagesList}>
        {
          messages.map((message) => {
            return (
              message.statusMessage ? <StatusMessage key={message._id} {...message} /> : <ChatMessage key={message._id} user={user} {...message} />
            );
          })
        }
      </section>
    )
  }
}

export default withStyles(styles)(MessagesList);
import React, { Component } from 'react';
import Avatar from 'material-ui/Avatar';
import Paper from 'material-ui/Paper';
import Typography from 'material-ui/Typography';
import { withStyles } from 'material-ui/styles';

import generateLastActivityMessage from '../services/generate-last-activity-message';

const messageWrapper = {
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  paddingTop: '8px',
  paddingBottom: '8px'
}

const styles = (theme) => ({
  avatar: {
    marginRight: '16px'
  },
  myMessageAvatar: {
    marginLeft: '16px',
    marginRight: 0,
    order: 1
  },
  message: {
    padding: '8px'
  },
  myMessage: {
    backgroundColor: '#e6dcff'
  },
  messageWrapper,
  myMessageWrapper: {
    ...messageWrapper,
    justifyContent: 'flex-end'
  }
});

class ChatMessage extends Component {
  render() {
    const { classes, sender, content, createdAt, user } = this.props;

    return (
      <div className={user._id === sender._id ? classes.myMessageWrapper : classes.messageWrapper}>
        <Avatar className={user._id === sender._id ? classes.myMessageAvatar : classes.avatar}>
          {sender.username[0]}
        </Avatar>
        <Paper className={`${classes.message} ${user._id === sender._id ? classes.myMessage : ''}`}>
          <Typography variant="caption">
            {sender.username}
          </Typography>
          <Typography>
            {content}
          </Typography>
          <Typography variant="caption">
            {generateLastActivityMessage(createdAt)}
          </Typography>
        </Paper>
      </div>
    );
  }
}

export default withStyles(styles)(ChatMessage);

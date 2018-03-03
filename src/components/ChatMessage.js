import React, { Component } from 'react';
import Avatar from 'material-ui/Avatar';
import Paper from 'material-ui/Paper';
import Typography from 'material-ui/Typography';
import { withStyles } from 'material-ui/styles';

const styles = (theme) => ({
  avatar: {
    marginRight: '16px'
  },
  message: {
    padding: '8px'
  },
  messageWrapper: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    paddingTop: '8px',
    paddingBottom: '8px'
  }
});

class ChatMessage extends Component {
  render() {
    const { classes, username, content, createdAt } = this.props;

    return (
      <div className={classes.messageWrapper}>
        <Avatar className={classes.avatar}>
          {username[0]}
        </Avatar>
        <Paper className={classes.message}>
          <Typography variant="caption">
            {username}
          </Typography>
          <Typography>
            {content}
          </Typography>
          <Typography variant="caption">
            {createdAt}
          </Typography>
        </Paper>
      </div>
    );
  }
}

export default withStyles(styles)(ChatMessage);

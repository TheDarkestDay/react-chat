import React, { Component } from 'react';
import Typography from 'material-ui/Typography';
import { withStyles } from 'material-ui/styles';

import generateLastActivityMessage from '../services/generate-last-activity-message';

const styles = () => ({
  messageWrapper: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: '8px',
    paddingBottom: '8px'
  }
});

class StatusMessage extends Component {
  render() {
    const {classes, content, createdAt, sender} = this.props;

    return (
      <div className={classes.messageWrapper}>
        <Typography>
          {`${sender.username} ${content}`}
        </Typography>
        <Typography variant="caption">
          {generateLastActivityMessage(createdAt)}
        </Typography>
      </div>
    );
  }
}

export default withStyles(styles)(StatusMessage);
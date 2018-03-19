import React, { Component } from 'react';
import Typography from 'material-ui/Typography';
import { withStyles } from 'material-ui/styles';
import toMaterialStyle from 'material-color-hash';
 
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
          <span style={{color: toMaterialStyle(sender.username).backgroundColor}}>
            {sender.username} 
          </span>
          <span>
            {content}
          </span>
        </Typography>
        <Typography variant="caption">
          {generateLastActivityMessage(createdAt)}
        </Typography>
      </div>
    );
  }
}

export default withStyles(styles)(StatusMessage);
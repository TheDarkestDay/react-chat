import React from 'react';
import PropTypes from 'prop-types';
import Avatar from 'material-ui/Avatar';
import Paper from 'material-ui/Paper';
import Typography from 'material-ui/Typography';
import { withStyles } from 'material-ui/styles';
import toMaterialStyle from 'material-color-hash';

import { User } from '../constants/shapes';
import generateLastActivityMessage from '../services/generate-last-activity-message';

const messageWrapper = {
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  paddingTop: '8px',
  paddingBottom: '8px',
};

const styles = () => ({
  avatar: {
    marginRight: '16px',
  },
  myMessageAvatar: {
    marginLeft: '16px',
    marginRight: 0,
    order: 1,
  },
  message: {
    padding: '8px',
  },
  myMessage: {
    backgroundColor: '#e6dcff',
  },
  messageWrapper,
  myMessageWrapper: {
    ...messageWrapper,
    justifyContent: 'flex-end',
  },
});

const ChatMessage = ({
  classes, sender, content, createdAt, user,
}) => {
  const materialStyles = toMaterialStyle(sender.username);

  return (
    <div className={user._id === sender._id ? classes.myMessageWrapper : classes.messageWrapper}>
      <Avatar
        className={user._id === sender._id ? classes.myMessageAvatar : classes.avatar}
        style={materialStyles}
      >
        {sender.username[0]}
      </Avatar>
      <Paper className={`${classes.message} ${user._id === sender._id ? classes.myMessage : ''}`}>
        <Typography variant="caption" style={{ color: materialStyles.backgroundColor }}>
          {sender.username}
        </Typography>
        <Typography>{content}</Typography>
        <Typography variant="caption">{generateLastActivityMessage(createdAt)}</Typography>
      </Paper>
    </div>
  );
};

ChatMessage.propTypes = {
  classes: PropTypes.objectOf(PropTypes.string).isRequired,
  sender: User.isRequired,
  content: PropTypes.string.isRequired,
  createdAt: PropTypes.string.isRequired,
  user: User.isRequired,
};

export default withStyles(styles)(ChatMessage);

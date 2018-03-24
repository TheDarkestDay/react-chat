import React from 'react';
import PropTypes from 'prop-types';
import Typography from 'material-ui/Typography';
import { withStyles } from 'material-ui/styles';
import toMaterialStyle from 'material-color-hash';

import { User } from '../constants/shapes';
import generateLastActivityMessage from '../services/generate-last-activity-message';

const styles = () => ({
  messageWrapper: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: '8px',
    paddingBottom: '8px',
  },
});

const StatusMessage = (props) => {
  const {
    classes, content, createdAt, sender,
  } = props;

  return (
    <div className={classes.messageWrapper}>
      <Typography>
        <span style={{ color: toMaterialStyle(sender.username).backgroundColor }}>
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
};

StatusMessage.propTypes = {
  classes: PropTypes.objectOf(PropTypes.string).isRequired,
  content: PropTypes.string.isRequired,
  createdAt: PropTypes.string.isRequired,
  sender: User.isRequired,
};

export default withStyles(styles)(StatusMessage);

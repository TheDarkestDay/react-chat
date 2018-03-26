import React from 'react';
import PropTypes from 'prop-types';
import Grid from 'material-ui/Grid';
import { withStyles } from 'material-ui/styles';

import Sidebar from '../containers/Sidebar';
import ChatWindow from '../containers/ChatWindow';

const styles = () => ({
  mainWrapper: {
    height: '100%',
  },
  sidebar: {
    minWidth: '320px',
  },
  chatWindow: {
    flexBasis: 0,
    flexGrow: 1,
  },
});

const ChatPage = ({ classes, match }) => (
  <Grid className={classes.mainWrapper} container direction="row" wrap="nowrap" spacing={0}>
    <Grid className={classes.sidebar} item>
      <Sidebar />
    </Grid>
    <Grid className={classes.chatWindow} item>
      <ChatWindow activeChatId={match.params.id} />
    </Grid>
  </Grid>
);

ChatPage.defaultProps = {
  match: null,
};

ChatPage.propTypes = {
  classes: PropTypes.objectOf(PropTypes.string).isRequired,
  match: PropTypes.shape({
    params: PropTypes.objectOf(PropTypes.string),
  }),
};

export default withStyles(styles)(ChatPage);

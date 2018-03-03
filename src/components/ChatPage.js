import React, { Component } from 'react';
import Grid from 'material-ui/Grid';
import { withStyles } from 'material-ui/styles';

import Sidebar from './Sidebar';
import ChatWindow from './ChatWindow';

const styles = (theme) => ({
  mainWrapper: {
    height: '100%'
  },
  sidebar: {
    minWidth: '320px'
  },
  chatWindow: {
    flexBasis: 0,
    flexGrow: 1
  }
});

class ChatPage extends Component {
  render() {
    const { classes } = this.props;

    return (
      <Grid 
        className={classes.mainWrapper} 
        container 
        direction="row"
        wrap="nowrap" 
        spacing={0}>
        <Grid className={classes.sidebar} item>
          <Sidebar />
        </Grid>
        <Grid className={classes.chatWindow} item>
          <ChatWindow />
        </Grid>
      </Grid>
    );
  }
}

export default withStyles(styles)(ChatPage);
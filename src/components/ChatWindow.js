import React, { Component } from 'react';
import AppBar from 'material-ui/AppBar';
import Button from 'material-ui/Button';
import IconButton from 'material-ui/IconButton';
import AccountCircle from 'material-ui-icons/AccountCircle';
import Menu, { MenuItem } from 'material-ui/Menu';
import Paper from 'material-ui/Paper';
import Input from 'material-ui/Input';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import { withStyles } from 'material-ui/styles';

import ChatMessage from './ChatMessage';

const chatHeaderHeight = '64px';
const newMessageFormHeight = '64px';

const styles = (theme) => ({
  chatHeader: {
    justifyContent: 'space-between'
  },
  chatWindowWrapper: {
    display: 'flex',
    flexDirection: 'column',
    height: '100%'
  },
  main: {
    flexGrow: 1,
    display: 'flex',
    flexDirection: 'column',
    padding: '16px  24px'
  },
  messagesList: {
    overflow: 'auto',
    maxHeight: `calc(100vh - ${chatHeaderHeight} - ${newMessageFormHeight})`,
    flexGrow: 1
  },
  newMessageFieldWrapper: {
    padding: '16px 24px'
  }
});

class ChatWindow extends Component {
  state = {
    anchorEl: null,
    isJoined: true,
    messages: [
      {
        id: 1,
        username: 'Alexander Brenchev',
        content: 'A sample text',
        createdAt: '21-Jan-1975'
      },
      {
        id: 2,
        username: 'Alexander Brenchev',
        content: 'A sample textA sample textA sample textA sample textA sample textA sample textA sample textA sample textA sample textA sample text',
        createdAt: '21-Jan-1975'
      },
      {
        id: 3,
        username: 'Alexander Brenchev',
        content: 'A sample text',
        createdAt: '21-Jan-1975'
      }
    ]
  };

  handleChange = (event, checked) => {
    this.setState({ auth: checked });
  };

  handleMenu = event => {
    this.setState({ anchorEl: event.currentTarget });
  };

  handleClose = () => {
    this.setState({ anchorEl: null });
  };

  handleLogoutClick = () => {
    this.props.quit();
  }

  render() {
    const { anchorEl } = this.state;
    const { classes } = this.props;
    const isOpened = Boolean(anchorEl);

    return (
      <div className={classes.chatWindowWrapper}>
        <AppBar position="static">
          <Toolbar className={classes.chatHeader}>
            <Typography variant="title" color="inherit">
              DogeCodes React Chat
            </Typography>
            <div>
              <IconButton
                aria-owns="menu-appbar"
                aria-haspopup="true"
                onClick={this.handleMenu}
                color="inherit"
              >
                <AccountCircle />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={isOpened}
                onClose={this.handleClose}
              >
                <MenuItem onClick={this.handleClose}>Edit profile</MenuItem>
                <MenuItem onClick={this.handleLogoutClick}>Logout</MenuItem>
              </Menu>
            </div>
          </Toolbar>
        </AppBar>
        <main className={classes.main}>
          <section className={classes.messagesList}>
            {
              this.state.messages.map((message) => {
                return (
                  <ChatMessage key={message.id} {...message} />
                );
              })
            }
          </section>
          <Paper className={classes.newMessageFieldWrapper}>
            {this.state.isJoined &&
              (<form>
                <Input placeholder="Type your message..." fullWidth />
              </form>)
            }
            {!this.state.isJoined &&
              (<Button variant="raised" color="primary" fullWidth> Join </Button>)
            }
          </Paper>
        </main>
      </div>
    );
  }
}

export default withStyles(styles)(ChatWindow);
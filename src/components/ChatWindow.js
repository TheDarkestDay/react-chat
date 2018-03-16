import React, { Component } from 'react';
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import AccountCircle from 'material-ui-icons/AccountCircle';
import Menu, { MenuItem } from 'material-ui/Menu';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import { withStyles } from 'material-ui/styles';

import ChatWelcome from './ChatWelcome';
import MessagesList from './MessagesList';
import NewMessageForm from './NewMessageForm';

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
  }
});

class ChatWindow extends Component {
  state = {
    anchorEl: null,
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

  componentDidMount() {
    this.props.initSocketConnection();
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.activeChatId !== this.props.activeChatId) {
      this.props.setActiveChat(nextProps.activeChatId);
    }
  }

  handleChange = (event, checked) => {
    this.setState({ auth: checked });
  };

  handleJoinChannel = () => {
    this.props.joinChat(this.props.activeChatId);
  }

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
    const { anchorEl, messages } = this.state;
    const { activeChatId, classes, isAllowedToSendMessages } = this.props;
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
          {
            activeChatId 
              ? <MessagesList messages={messages}/>
              : <ChatWelcome />
          }
          { activeChatId && <NewMessageForm isAllowedToSendMessages={isAllowedToSendMessages} joinChat={this.handleJoinChannel} /> }
        </main>
      </div>
    );
  }
}

export default withStyles(styles)(ChatWindow);
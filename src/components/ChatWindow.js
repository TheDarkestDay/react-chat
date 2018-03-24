import React, { Component } from 'react';
import PropTypes from 'prop-types';
import AppBar from 'material-ui/AppBar';
import Avatar from 'material-ui/Avatar';
import IconButton from 'material-ui/IconButton';
import AccountCircle from 'material-ui-icons/AccountCircle';
import Menu, { MenuItem } from 'material-ui/Menu';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import toMaterialStyle from 'material-color-hash';
import { withStyles } from 'material-ui/styles';

import { Chat, Message, User } from '../constants/shapes';
import ChatWelcome from './ChatWelcome';
import ChatMenu from './ChatMenu';
import EditUserDialog from './dialogs/EditUserDialog';
import MessagesList from './MessagesList';
import NewMessageForm from './NewMessageForm';

const styles = () => ({
  chatHeader: {
    justifyContent: 'space-between',
  },
  chatTitle: {
    marginLeft: '16px',
  },
  chatWindowWrapper: {
    display: 'flex',
    flexDirection: 'column',
    height: '100%',
  },
  flexRow: {
    display: 'flex',
    alignItems: 'center',
  },
  main: {
    flexGrow: 1,
    display: 'flex',
    flexDirection: 'column',
    padding: '16px  24px',
  },
});

class ChatWindow extends Component {
  static defaultProps = {
    activeChat: null,
    activeChatId: '',
  }

  static propTypes = {
    activeChat: Chat,
    classes: PropTypes.objectOf(PropTypes.string).isRequired,
    initSocketConnection: PropTypes.func.isRequired,
    activeChatId: PropTypes.string,
    unmountChat: PropTypes.func.isRequired,
    setActiveChat: PropTypes.func.isRequired,
    getMessages: PropTypes.func.isRequired,
    mountChat: PropTypes.func.isRequired,
    deleteChat: PropTypes.func.isRequired,
    editUser: PropTypes.func.isRequired,
    joinChat: PropTypes.func.isRequired,
    leaveChat: PropTypes.func.isRequired,
    quit: PropTypes.func.isRequired,
    isAllowedToSendMessages: PropTypes.bool.isRequired,
    isCreator: PropTypes.bool.isRequired,
    isSocketConnected: PropTypes.bool.isRequired,
    sendMessage: PropTypes.func.isRequired,
    messages: PropTypes.arrayOf(Message).isRequired,
    user: User.isRequired,
  }

  state = {
    anchorEl: null,
    isDialogOpened: false,
  };

  componentDidMount() {
    this.props.initSocketConnection();
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.activeChatId !== this.props.activeChatId) {
      if (this.props.activeChatId) {
        this.props.unmountChat(this.props.activeChatId);
      }

      if (nextProps.activeChatId) {
        this.props.setActiveChat(nextProps.activeChatId);
        this.props.getMessages(nextProps.activeChatId);
        this.props.mountChat(nextProps.activeChatId);
      }
    }
  }

  handleChatDelete = () => {
    this.props.deleteChat(this.props.activeChat._id);
  }

  handleDialogClose = () => {
    this.setState({
      isDialogOpened: false,
    });
  }

  handleDialogDone = (username, firstName, lastName) => {
    this.props.editUser(username, firstName, lastName);
  };

  handleEditProfileClick = () => {
    this.setState({
      isDialogOpened: true,
    });
  }

  handleJoinChat = () => {
    this.props.joinChat(this.props.activeChat._id);
  }

  handleChatLeave = () => {
    this.props.leaveChat(this.props.activeChat._id);
  }

  handleMenu = (event) => {
    this.setState({ anchorEl: event.currentTarget });
  };

  handleMessageSubmit = (content) => {
    const { sendMessage, activeChat } = this.props;

    sendMessage(activeChat._id, content);
  }

  handleClose = () => {
    this.setState({ anchorEl: null });
  };

  handleLogoutClick = () => {
    this.props.quit();
  }

  render() {
    const { anchorEl, isDialogOpened } = this.state;
    const {
      activeChat, classes, isAllowedToSendMessages, isCreator, isSocketConnected, messages, user,
    } = this.props;
    const isOpened = Boolean(anchorEl);

    return (
      <div className={classes.chatWindowWrapper}>
        <AppBar position="static">
          <Toolbar className={classes.chatHeader}>
            {activeChat
              ?
              (
                <div className={classes.flexRow}>
                  <Avatar style={toMaterialStyle(activeChat.title)}>
                    {activeChat.title[0]}
                  </Avatar>
                  <Typography className={classes.chatTitle} variant="title" color="inherit">
                    {activeChat.title}
                  </Typography>
                  {isAllowedToSendMessages &&
                    <ChatMenu
                      isCreator={isCreator}
                      onChatDelete={this.handleChatDelete}
                      onChatLeave={this.handleChatLeave}
                    />
                  }
                </div>
              )
              :
              (
                <Typography variant="title" color="inherit">
                  DogeCodes React Chat
                </Typography>
              )
            }
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
                <MenuItem onClick={this.handleEditProfileClick}>Edit profile</MenuItem>
                <MenuItem onClick={this.handleLogoutClick}>Logout</MenuItem>
              </Menu>
              <EditUserDialog
                userInfo={user}
                isOpened={isDialogOpened}
                onDone={this.handleDialogDone}
                onClose={this.handleDialogClose}
                disabled={!isSocketConnected}
              />
            </div>
          </Toolbar>
        </AppBar>
        <main className={classes.main}>
          {
            activeChat
              ? <MessagesList messages={messages} user={user} />
              : <ChatWelcome />
          }
          {activeChat &&
            <NewMessageForm
              isAllowedToSendMessages={isAllowedToSendMessages}
              joinChat={this.handleJoinChat}
              sendMessage={this.handleMessageSubmit}
              disabled={!isSocketConnected}
            />
          }
        </main>
      </div>
    );
  }
}

export default withStyles(styles)(ChatWindow);

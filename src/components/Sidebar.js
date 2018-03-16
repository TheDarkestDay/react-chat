import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Input from 'material-ui/Input';
import Paper from 'material-ui/Paper';
import List, { ListItem, ListItemText } from 'material-ui/List';
import Avatar from 'material-ui/Avatar';
import Button from 'material-ui/Button';
import AddIcon from 'material-ui-icons/Add';
import BottomNavigation, { BottomNavigationAction } from 'material-ui/BottomNavigation';
import RestoreIcon from 'material-ui-icons/Restore';
import ExploreIcon from 'material-ui-icons/Explore';
import { withStyles } from 'material-ui/styles';

import generateLastActivityMessage from '../services/generate-last-activity-message';
import CreateChannelDialog from './dialogs/CreateChannelDialog';

const chatSearchFormHeight = '64px';
const bottomNavigationHeight = '56px';

const styles = (theme) => ({
  chatLink: {
    textDecoration: 'none'
  },
  searchChatForm: {
    padding: '16px 24px'
  },
  sidebar: {
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
    height: '100%',
    backgroundColor: '#ffffff'
  },
  chatsList: {
    flexGrow: 1,
    overflow: 'auto',
    maxHeight: `calc(100vh - ${chatSearchFormHeight} - ${bottomNavigationHeight})`
  },
  addChatBtn: {
    position: 'absolute',
    bottom: '64px',
    right: '24px'
  }
});

const CHATS_SELECTION = {
  MY: 0,
  ALL: 1
};

class Sidebar extends Component {
  state = {
    currentSelectionIndex: 0,
    isDialogOpened: false
  };

  componentDidMount() {
    this.props.getChats();
  }

  handleChatQueryChange = (event) => {
    this.props.searchChats(event.target.value);
  }

  handleDialogClose = () => {
    this.setState({
      isDialogOpened: false
    });
  }

  handleDialogDone = (chatTitle) => {
    this.handleDialogClose();
    this.props.createChat(chatTitle);
  }

  toggleChatsSelection = (event, value) => {
    this.setState({
      currentSelectionIndex: value
    });

    if (value === CHATS_SELECTION.MY) {
      this.props.showMyChats();
    } else {
      this.props.showAllChats();
    }
  };

  openCreateChannelDialog = () => {
    this.setState({
      isDialogOpened: true
    });
  }

  render() {
    const { classes, chats, chatQuery } = this.props;
    const { currentSelectionIndex, isDialogOpened } = this.state;

    return (
      <aside className={classes.sidebar}>
        <Paper className={classes.searchChatForm} elevation={1}>
          <form>
            <Input
              id="chatSearch"
              placeholder="Search chats..."
              value={chatQuery}
              onChange={this.handleChatQueryChange}
              fullWidth />
          </form>
        </Paper>
        <List className={classes.chatsList}>
          {chats.map((chat) => {
            return (
              <Link className={classes.chatLink} to={`/chat/${chat._id}`} key={chat._id}>
                <ListItem button>
                  <Avatar>{chat.title[0]}</Avatar>
                  <ListItemText
                    primary={chat.title}
                    secondary={generateLastActivityMessage(chat.updatedAt)}>
                  </ListItemText>
                </ListItem>
              </Link>
            );
          })}
        </List>
        <Button className={classes.addChatBtn} onClick={this.openCreateChannelDialog} variant="fab" color="primary" aria-label="add">
          <AddIcon />
        </Button>
        <BottomNavigation
          value={currentSelectionIndex}
          onChange={this.toggleChatsSelection}
          showLabels>
          <BottomNavigationAction label="My Chats" icon={<RestoreIcon />} />
          <BottomNavigationAction label="Explore" icon={<ExploreIcon />} />
        </BottomNavigation>
        <CreateChannelDialog isOpened={isDialogOpened} onClose={this.handleDialogClose} onDone={this.handleDialogDone}/>
      </aside>
    );
  }
}

export default withStyles(styles)(Sidebar);
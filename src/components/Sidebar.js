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

class Sidebar extends Component {
  state = {
    chatQuery: '',
    currentTabIndex: 0,
    isDialogOpened: false
  };

  handleDialogClose = () => {
    this.setState({
      isDialogOpened: false
    });
  }

  handleDialogDone = (chatData) => {
    this.handleDialogClose();
    this.props.createChat(chatData);
  }

  handleTabChange = (event, value) => {
    this.setState({
      currentTabIndex: value
    });
  };

  openCreateChannelDialog = () => {
    this.setState({
      isDialogOpened: true
    });
  }

  render() {
    const { classes, chats } = this.props;
    const { currentTabIndex, isDialogOpened } = this.state;

    return (
      <aside className={classes.sidebar}>
        <Paper className={classes.searchChatForm} elevation={1}>
          <form>
            <Input
              id="chatSearch"
              placeholder="Search chats..."
              value={this.state.chatQuery}
              fullWidth />
          </form>
        </Paper>
        <List className={classes.chatsList}>
          {chats.map((chat) => {
            return (
              <Link className={classes.chatLink} to={`/chat/${chat.id}`} key={chat.id}>
                <ListItem button>
                  <Avatar>{chat.name[0]}</Avatar>
                  <ListItemText
                    primary={chat.name}
                    secondary={`${chat.daysSinceLastActivity} days ago`}>
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
          value={currentTabIndex}
          onChange={this.handleTabChange}
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
import React, { Component } from 'react';
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

const chatSearchFormHeight = '64px';
const bottomNavigationHeight = '56px';

const styles = (theme) => ({
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
    chats: [
      {
        id: 1,
        name: 'React talks',
        daysSinceLastActivity: 1
      },
      {
        id: 2,
        name: 'Angular talks',
        daysSinceLastActivity: 2
      },
      {
        id: 3,
        name: 'Vue talks',
        daysSinceLastActivity: 3
      }
    ],
    currentTabIndex: 0,
  };

  handleTabChange = (event, value) => {
    this.setState({ 
      currentTabIndex: value 
    });
  };

  render() {
    const { classes } = this.props;
    const { currentTabIndex } = this.state;

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
          {this.state.chats.map((chat) => {
            return (
              <ListItem key={chat.id} button>
                <Avatar>{chat.name[0]}</Avatar>
                <ListItemText 
                  primary={chat.name} 
                  secondary={`${chat.daysSinceLastActivity} days ago`}>
                </ListItemText>
              </ListItem>
            );
          })}
        </List>
        <Button className={classes.addChatBtn} variant="fab" color="primary" aria-label="add">
          <AddIcon />
        </Button>
        <BottomNavigation 
          value={currentTabIndex}
          onChange={this.handleTabChange}
          showLabels>
          <BottomNavigationAction label="My Chats" icon={<RestoreIcon />} />
          <BottomNavigationAction label="Explore" icon={<ExploreIcon />} />
        </BottomNavigation>
      </aside>
    );
  }
}

export default withStyles(styles)(Sidebar);
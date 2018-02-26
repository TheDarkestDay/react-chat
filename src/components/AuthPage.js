import React, { Component } from 'react';
import AppBar from 'material-ui/AppBar';
import Card, {} from 'material-ui/Card';
import Grid from 'material-ui/Grid';
import Tabs, { Tab } from 'material-ui/Tabs';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import { withStyles } from 'material-ui/styles';

import LoginForm from './LoginForm';
import SignupForm from './SignupForm';

const styles = (theme) => ({
  appHeader: {
    marginBottom: '24px'
  },
  formWrapper: {
    minWidth: '500px'
  },
  tabs: {
    backgroundColor: '#f5f5f5',
    boxShadow: '0px 2px 4px -1px rgba(0, 0, 0, 0.2), 0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12)'
  }
});

const TabIndex = {
  LOGIN: 0,
  SIGN_UP: 1
};

class AuthPage extends Component {
  constructor() {
    super();
    this.state = {
      currentTabIndex: 0
    };
  }

  handleTabChange(event, newIndex) {
    this.setState({
      currentTabIndex: newIndex
    });
  }

  render() {
    const { classes } = this.props;
    const { currentTabIndex } = this.state;

    return (
      <React.Fragment>
        <AppBar className={classes.appHeader} position="static">
          <Toolbar>
            <Typography variant="title" color="inherit">
              DogeCodes React Chat
            </Typography>
          </Toolbar>
        </AppBar>
        <main>
          <Grid container justify="center">
            <Grid item>
              <Card className={classes.formWrapper}>
                <Tabs className={classes.tabs} value={currentTabIndex} onChange={this.handleTabChange.bind(this)} fullWidth>
                  <Tab label="Login" />
                  <Tab label="Sign up" />
                </Tabs>
                { currentTabIndex === TabIndex.LOGIN && <LoginForm /> }
                { currentTabIndex === TabIndex.SIGN_UP && <SignupForm /> }
              </Card>
            </Grid>
          </Grid>
        </main>
      </React.Fragment>
    );
  }
}

export default withStyles(styles)(AuthPage);
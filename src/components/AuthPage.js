import React, { Component } from 'react';
import PropTypes from 'prop-types';
import AppBar from 'material-ui/AppBar';
import Card, { } from 'material-ui/Card';
import Grid from 'material-ui/Grid';
import { LinearProgress } from 'material-ui/Progress';
import Tabs, { Tab } from 'material-ui/Tabs';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import { withStyles } from 'material-ui/styles';
import { Redirect } from 'react-router-dom';

import LoginForm from '../containers/LoginForm';
import SignupForm from '../containers/SignupForm';

const styles = () => ({
  appHeader: {
    position: 'relative',
    marginBottom: '24px',
  },
  flexRow: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  formWrapper: {
    minWidth: '500px',
  },
  progressBar: {
    position: 'absolute',
    width: '100%',
    bottom: 0,
  },
  tabs: {
    backgroundColor: '#f5f5f5',
    boxShadow: '0px 2px 4px -1px rgba(0, 0, 0, 0.2), 0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12)',
  },
});

const TabIndex = {
  LOGIN: 0,
  SIGN_UP: 1,
};

class AuthPage extends Component {
  static propTypes = {
    classes: PropTypes.objectOf(PropTypes.string).isRequired,
    isAuthenticated: PropTypes.bool.isRequired,
    isRequestInProgress: PropTypes.bool.isRequired,
  }

  state = {
    currentTabIndex: 0,
  }

  handleTabChange(event, newIndex) {
    this.setState({
      currentTabIndex: newIndex,
    });
  }

  render() {
    const {
      classes, isAuthenticated, isRequestInProgress,
    } = this.props;
    const { currentTabIndex } = this.state;

    if (isAuthenticated) {
      return (
        <Redirect to="/chat" />
      );
    }

    return (
      <React.Fragment>
        <AppBar className={classes.appHeader} position="static">
          <Toolbar>
            <Typography variant="title" color="inherit">
              DogeCodes React Chat
            </Typography>
          </Toolbar>
          {isRequestInProgress && <LinearProgress className={classes.progressBar} />}
        </AppBar>
        <main>
          <section className={classes.flexRow}>
            <Grid item>
              <Card className={classes.formWrapper}>
                <Tabs
                  className={classes.tabs}
                  value={currentTabIndex}
                  onChange={(evt, index) => this.handleTabChange(evt, index)}
                  fullWidth
                >
                  <Tab label="Login" />
                  <Tab label="Sign up" />
                </Tabs>
                {currentTabIndex === TabIndex.LOGIN && <LoginForm />}
                {currentTabIndex === TabIndex.SIGN_UP && <SignupForm />}
              </Card>
            </Grid>
          </section>
        </main>
      </React.Fragment>
    );
  }
}

export default withStyles(styles)(AuthPage);

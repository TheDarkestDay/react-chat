import React, { Component } from 'react';
import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom';
import Reboot from 'material-ui/Reboot';
import 'typeface-roboto';

import AuthPage from './components/AuthPage';
import ChatPage from './components/ChatPage';

class App extends Component {
  render() {
    return (
      <Router>
        <React.Fragment>
          <Reboot />
          <Switch>
            <Route path="/" exact component={AuthPage} />
            <Route path="/chat" component={ChatPage} />
            <Redirect to="/" />
          </Switch>
        </React.Fragment>
      </Router>
    );
  }
}

export default App;

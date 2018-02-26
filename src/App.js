import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Reboot from 'material-ui/Reboot';
import 'typeface-roboto';

import AuthPage from './components/AuthPage';

class App extends Component {
  render() {
    return (
      <Router>
        <React.Fragment>
          <Reboot />
          <Switch>
            <Route path="/auth" exact component={AuthPage} />
            <Route path="/chat" component={() => <h1>Chat</h1>} />
            <Route component={() => <h1> Default page </h1>} />
          </Switch>
        </React.Fragment>
      </Router>
    );
  }
}

export default App;

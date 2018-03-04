import React, { Component } from 'react';
import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom';
import Reboot from 'material-ui/Reboot';
import 'typeface-roboto';
import { Provider } from 'react-redux';

import store from './store';
import AuthPage from './containers/AuthPage';
import ChatPage from './components/ChatPage';
import PrivateRoute from './containers/PrivateRoute';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <React.Fragment>
            <Reboot />
            <Switch>
              <Route path="/" exact component={AuthPage} />
              <PrivateRoute path="/chat" component={ChatPage} />
              <Redirect to="/" />
            </Switch>
          </React.Fragment>
        </Router>
      </Provider>
    );
  }
}

export default App;

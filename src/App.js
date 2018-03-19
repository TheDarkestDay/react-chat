import React, { Component } from 'react';
import { Router, Redirect, Route, Switch } from 'react-router-dom';
import Reboot from 'material-ui/Reboot';
import 'typeface-roboto';
import { Provider } from 'react-redux';

import history from './utils/history';
import store from './store';
import AuthPage from './containers/AuthPage';
import ChatPage from './components/ChatPage';
import PrivateRoute from './containers/PrivateRoute';
import WithErrorMessage from './containers/WithErrorMessage';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router history={history}>
          <React.Fragment>
            <Reboot />
            <Switch>
              <Route path="/" exact component={(props) => <WithErrorMessage component={AuthPage} {...props} />} />
              <PrivateRoute path="/chat/:id?" component={(props) => <WithErrorMessage component={ChatPage} {...props} />} />
              <Redirect to="/" />
            </Switch>
          </React.Fragment>
        </Router>
      </Provider>
    );
  }
}

export default App;

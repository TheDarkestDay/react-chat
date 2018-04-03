import React from 'react';
import { Router, Redirect, Route, Switch } from 'react-router-dom';
import Reboot from 'material-ui/Reboot';
import 'typeface-roboto/index.css';
import { Provider } from 'react-redux';

import history from './utils/history';
import store from './store';
import AuthPage from './containers/AuthPage';
import ChatPage from './components/ChatPage';
import PrivateRoute from './containers/PrivateRoute';
import ErrorMessage from './containers/ErrorMessage';

const App = () => (
  <Provider store={store}>
    <Router history={history}>
      <React.Fragment>
        <Reboot />
        <Switch>
          <Route path="/" exact component={AuthPage} />
          <PrivateRoute path="/chat/:id?" component={ChatPage} />
          <Redirect to="/" />
        </Switch>
        <ErrorMessage />
      </React.Fragment>
    </Router>
  </Provider>
);

export default App;

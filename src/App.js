import React, { Component } from 'react';
import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom';
import Reboot from 'material-ui/Reboot';
import 'typeface-roboto';
import { Provider } from 'react-redux';
import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';

import AuthPage from './containers/AuthPage';
import ChatPage from './components/ChatPage';
import { rootReducer } from './reducers';

let store = createStore(
  rootReducer,
  applyMiddleware(
    thunk,
    logger
  )
);

class App extends Component {
  render() {
    return (
      <Provider store={store}>
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
      </Provider>
    );
  }
}

export default App;

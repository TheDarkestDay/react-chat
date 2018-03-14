import React, { Component } from 'react';
import { Route, Redirect } from 'react-router-dom';

export default class PrivateRoute extends Component {
  componentDidMount() {
    this.props.getWhoami();
  }

  render() {
    const { component: Component, isAuthenticated, ...rest } = this.props;

    return (
      <Route
        {...rest}
        render={props =>
          isAuthenticated ? (
            <Component {...props} />
          ) : (
              <Redirect to="/" />
            )
        }
      />
    );
  }
}
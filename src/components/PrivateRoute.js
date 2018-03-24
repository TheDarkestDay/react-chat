import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Route, Redirect } from 'react-router-dom';

export default class PrivateRoute extends Component {
  static propTypes = {
    component: PropTypes.func.isRequired,
    isAuthenticated: PropTypes.bool.isRequired,
    getWhoami: PropTypes.func.isRequired,
  };

  componentDidMount() {
    this.props.getWhoami();
  }

  render() {
    const { component: GuardedComponent, isAuthenticated, ...rest } = this.props;

    return (
      <Route
        {...rest}
        render={props => (isAuthenticated ? <GuardedComponent {...props} /> : <Redirect to="/" />)}
      />
    );
  }
}

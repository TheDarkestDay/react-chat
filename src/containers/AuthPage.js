import { connect } from 'react-redux';

import AuthPage from '../components/AuthPage';

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated,
  isRequestInProgress: state.isFetching.login || state.isFetching.signup,
});

export default connect(
  mapStateToProps,
  null,
)(AuthPage);

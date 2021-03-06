import { connect } from 'react-redux';

import PrivateRoute from '../components/PrivateRoute';
import { getWhoami } from '../actions/auth';

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated,
});

const mapDispatchToProps = dispatch => ({
  getWhoami: () => {
    dispatch(getWhoami());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(PrivateRoute);

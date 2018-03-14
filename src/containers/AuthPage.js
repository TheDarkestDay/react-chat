import { connect } from 'react-redux';

import AuthPage from '../components/AuthPage';
import { closeSnackbar } from '../actions/auth';

const mapStateToProps = (state) => {
  return {
    errorMessage: state.auth.errorMessage,
    isAuthenticated: state.auth.isAuthenticated,
    isErrorMessageShown: state.auth.isErrorMessageShown,
    isRequestInProgress: state.auth.isRequestInProgress
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    closeSnackbar: ()  => {
      dispatch(closeSnackbar());
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AuthPage);
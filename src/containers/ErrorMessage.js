import { connect } from 'react-redux';

import { closeSnackbar } from '../actions/auth';
import ErrorMessage from '../components/ErrorMessage';

const mapStateToProps = state => ({
  errorMessage: state.errors.errorMessage,
  isErrorMessageShown: state.errors.isErrorMessageShown,
});

const mapDispatchToProps = dispatch => ({
  closeSnackbar: () => {
    dispatch(closeSnackbar());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(ErrorMessage);

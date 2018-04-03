import { connect } from 'react-redux';

import { signup, signupError } from '../actions/auth';
import SignupForm from '../components/SignupForm';

const mapDispatchToProps = dispatch => ({
  signup: (credentials) => {
    dispatch(signup(credentials));
  },
  signupError: (error) => {
    dispatch(signupError(error));
  },
});

export default connect(null, mapDispatchToProps)(SignupForm);

import { connect } from 'react-redux';

import { signup } from '../actions/auth';
import SignupForm from '../components/SignupForm';

const mapDispatchToProps = dispatch => ({
  signup: (credentials) => {
    dispatch(signup(credentials));
  },
});

export default connect(null, mapDispatchToProps)(SignupForm);

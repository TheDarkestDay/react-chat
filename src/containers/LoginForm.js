import { connect } from 'react-redux';

import { login } from '../actions/auth';
import LoginForm from '../components/LoginForm';

const mapDispatchToProps = dispatch => ({
  login: (credentials) => {
    dispatch(login(credentials));
  },
});

export default connect(null, mapDispatchToProps)(LoginForm);

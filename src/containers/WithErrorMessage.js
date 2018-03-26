import { connect } from 'react-redux';

import { closeSnackbar } from '../actions/auth';
import WithErrorMessage from '../components/WithErrorMessage';

const mapStateToProps = (state) => {
    return {
        errorMessage: state.errors.errorMessage,
        isErrorMessageShown: state.errors.isErrorMessageShown
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        closeSnackbar: () => {
            dispatch(closeSnackbar());
        }
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(WithErrorMessage);
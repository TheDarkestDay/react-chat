import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Snackbar from 'material-ui/Snackbar';

export default class ErrorMessage extends Component {
  propTypes = {
    closeSnackbar: PropTypes.func.isRequired,
    errorMessage: PropTypes.string,
    isErrorMessageShown: PropTypes.bool.isRequired,
  }

  handleSnackbarClose = (reason) => {
    if (reason === 'clickaway') {
      return;
    }

    this.props.closeSnackbar();
  }

  render() {
    const { errorMessage, isErrorMessageShown } = this.props;

    return (
      <Snackbar
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
        open={isErrorMessageShown}
        autoHideDuration={2000}
        onClose={this.handleSnackbarClose}
        SnackbarContentProps={{
          'aria-describedby': 'message-id',
        }}
        message={<span id="message-id">{errorMessage}</span>}
      />
    );
  }
}

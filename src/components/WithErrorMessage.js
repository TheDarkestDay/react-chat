import React, { Component } from 'react';
import Snackbar from 'material-ui/Snackbar';

export default class WithErrorMessage extends Component {
    handleSnackbarClose = (reason) => {
        if (reason === 'clickaway') {
            return;
        }

        this.props.closeSnackbar();
    }

    render() {
        const { component: Component, errorMessage, isErrorMessageShown } = this.props;

        return (
            <React.Fragment>
                <Component {...this.props} />
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
            </React.Fragment>
        );
    }
}
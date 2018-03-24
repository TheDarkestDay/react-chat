import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Button from 'material-ui/Button';
import TextField from 'material-ui/TextField';
import Dialog, { DialogActions, DialogContent, DialogTitle } from 'material-ui/Dialog';

export default class EditUserDialog extends Component {
  static propTypes = {
    disabled: PropTypes.bool.isRequired,
    isOpened: PropTypes.bool.isRequired,
    onClose: PropTypes.func.isRequired,
    onDone: PropTypes.func.isRequired,
    userInfo: PropTypes.shape({
      _id: PropTypes.string.isRequired,
      username: PropTypes.string.isRequired,
      firstName: PropTypes.string,
      lastName: PropTypes.string,
    }).isRequired,
  };

  state = {
    username: '',
    firstName: '',
    lastName: '',
  };

  componentWillReceiveProps({ userInfo }) {
    if (userInfo) {
      this.setState({
        username: userInfo.username,
        firstName: userInfo.firstName,
        lastName: userInfo.lastName,
      });
    }
  }

  handleFieldChange(field, evt) {
    this.setState({
      [field]: evt.target.value,
    });
  }

  handleDone = () => {
    const { username, firstName, lastName } = this.state;
    this.props.onDone(username, firstName, lastName);
    this.props.onClose();
  };

  render() {
    const { disabled, isOpened, onClose } = this.props;

    return (
      <Dialog open={isOpened} onClose={onClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Edit profile</DialogTitle>
        <DialogContent>
          <TextField
            onChange={evt => this.handleFieldChange('username', evt)}
            autoFocus
            margin="dense"
            id="usernamename"
            label="Username"
            type="text"
            fullWidth
            required
            value={this.state.username}
          />
          <TextField
            onChange={evt => this.handleFieldChange('firstName', evt)}
            autoFocus
            margin="dense"
            id="firstName"
            label="First name"
            type="text"
            fullWidth
            required
            value={this.state.firstName}
          />
          <TextField
            onChange={evt => this.handleFieldChange('lastName', evt)}
            autoFocus
            margin="dense"
            id="lastName"
            label="Last name"
            type="text"
            fullWidth
            required
            value={this.state.lastName}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={this.handleDone} color="primary" disabled={disabled}>
            Save
          </Button>
          <Button onClick={onClose} color="primary">
            Close
          </Button>
        </DialogActions>
      </Dialog>
    );
  }
}

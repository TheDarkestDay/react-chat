import React, { Component } from 'react';
import Button from 'material-ui/Button';
import TextField from 'material-ui/TextField';
import Dialog, {
  DialogActions,
  DialogContent,
  DialogTitle,
} from 'material-ui/Dialog';

export default class CreateChannelDialog extends Component {
  state = {
    channelName: ''
  };

  handleChannelNameChange = (evt) => {
    this.setState({
      channelName: evt.target.value
    });
  }

  handleDone = () => {}

  render() {
    const { isOpened, onClose } = this.props;

    return (
      <Dialog
        open={isOpened}
        onClose={onClose}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">
          Create new chat
        </DialogTitle>
        <DialogContent>
          <TextField
            onChange={this.handleChannelNameChange}
            autoFocus
            margin="dense"
            id="name"
            label="New chat"
            type="text"
            fullWidth
            required
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={this.handleDone} color="primary">
            Create
          </Button>
        </DialogActions>
      </Dialog>
    );
  }
}
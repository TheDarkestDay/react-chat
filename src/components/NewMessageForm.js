import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Button from 'material-ui/Button';
import Input from 'material-ui/Input';
import Paper from 'material-ui/Paper';
import { withStyles } from 'material-ui/styles';

const styles = () => ({
  newMessageFieldWrapper: {
    padding: '16px 24px',
  },
});

class NewMessageForm extends Component {
  propTypes = {
    classes: PropTypes.objectOf(PropTypes.string).isRequired,
    disabled: PropTypes.bool.isRequired,
    isAllowedToSendMessages: PropTypes.bool.isRequired,
    joinChat: PropTypes.func.isRequired,
    sendMessage: PropTypes.func.isRequired,
  }

  state = {
    content: '',
  }

  handleChange = (evt) => {
    this.setState({
      content: evt.target.value,
    });
  }

  handleSubmit = (evt) => {
    evt.preventDefault();

    this.props.sendMessage(this.state.content);

    this.setState({
      content: '',
    });
  }

  render() {
    const { content } = this.state;
    const {
      classes, disabled, isAllowedToSendMessages, joinChat,
    } = this.props;

    return (
      <Paper className={classes.newMessageFieldWrapper}>
        {isAllowedToSendMessages ?
          <form onSubmit={this.handleSubmit}>
            <Input onChange={this.handleChange} placeholder="Type your message..." fullWidth disabled={disabled} value={content} />
          </form>
          :
          <Button onClick={joinChat} variant="raised" color="primary" fullWidth disabled={disabled}> Join </Button>
        }
      </Paper>
    );
  }
}

export default withStyles(styles)(NewMessageForm);

import React, { Component } from 'react';
import Button from 'material-ui/Button';
import Input from 'material-ui/Input';
import Paper from 'material-ui/Paper';
import { withStyles } from 'material-ui/styles';

const styles = () => ({
  newMessageFieldWrapper: {
    padding: '16px 24px'
  }
});

class NewMessageForm extends Component {
  render() {
    const { classes, disabled, isAllowedToSendMessages, joinChat } = this.props;

    return (
      <Paper className={classes.newMessageFieldWrapper}>
        {isAllowedToSendMessages 
          ?
            <form>
              <Input placeholder="Type your message..." fullWidth  disabled={disabled} />
            </form>
          : 
            <Button onClick={joinChat} variant="raised" color="primary" fullWidth disabled={disabled}> Join </Button>  
        }
      </Paper>
    );
  }
}

export default withStyles(styles)(NewMessageForm);
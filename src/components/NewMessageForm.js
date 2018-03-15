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
    const { classes, isMember, joinChat } = this.props;

    return (
      <Paper className={classes.newMessageFieldWrapper}>
        {isMember &&
          (<form>
            <Input placeholder="Type your message..." fullWidth />
          </form>)
        }
        {!isMember &&
          (<Button onClick={joinChat} variant="raised" color="primary" fullWidth> Join </Button>)
        }
      </Paper>
    );
  }
}

export default withStyles(styles)(NewMessageForm);
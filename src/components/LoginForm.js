import React, { Component } from 'react';
import Button from 'material-ui/Button';
import { CardContent } from 'material-ui/Card';
import Input, { InputLabel } from 'material-ui/Input';
import { FormControl } from 'material-ui/Form';
import { withStyles } from 'material-ui/styles';

const styles = (theme) => ({
  formControl: {
    display: 'block',
    marginBottom: '12px'
  },
  input: {
    width: '100%'
  },
  submitBtn: {
    marginTop: '16px'
  }
});

class LoginForm extends Component {
  constructor() {
    super();
    this.state = {
      username: '',
      password: ''
    };
  }

  handleFieldChange(evt, field, value) {
    this.setState({
      [field]: value
    });
  }

  render() {
    const { username, password } = this.state;
    const { classes } = this.props;

    return (
      <React.Fragment>
        <CardContent>
          <FormControl className={classes.formControl} required>
            <InputLabel htmlFor="username">Name</InputLabel>
            <Input id="username" className={classes.input}
              value={username}
              onChange={this.handleFieldChange.bind(this, 'username')}
              placeholder="Type your username" />
          </FormControl>
          <FormControl className={classes.formControl} required>
            <InputLabel htmlFor="password">Password</InputLabel>
            <Input id="password" className={classes.input}
              value={password}
              onChange={this.handleFieldChange.bind(this, 'password')}
              placeholder="Type your password" />
          </FormControl>
          <Button className={classes.submitBtn} variant="raised" color="primary" fullWidth>
            Login
          </Button>
        </CardContent>
      </React.Fragment>
    );
  }
}

export default withStyles(styles)(LoginForm);
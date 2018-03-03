import React, { Component } from 'react';
import Button from 'material-ui/Button';
import { CardContent } from 'material-ui/Card';
import Input, { InputLabel } from 'material-ui/Input';
import { FormControl} from 'material-ui/Form';
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

class SignupForm extends Component {
  constructor() {
    super();
    this.state = {
      username: '',
      password: '',
      passwordConfirmation: ''
    };
  }

  handleFieldChange(evt, field, value) {
    this.setState({
      [field]: value
    });
  }

  render() {
    const { username, password, passwordConfirmation } = this.state;
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
          <FormControl className={classes.formControl} required>
            <InputLabel htmlFor="confirmPassword">Confirm password</InputLabel>
            <Input id="confirmPassword" className={classes.input}
              value={passwordConfirmation}
              onChange={this.handleFieldChange.bind(this, 'passwordConfirmation')}
              placeholder="Repeat your password" />
          </FormControl>
          <Button className={classes.submitBtn} variant="raised" color="primary" fullWidth>
            Sign up
          </Button>
        </CardContent>
      </React.Fragment>
    );
  }
};

export default withStyles(styles)(SignupForm);
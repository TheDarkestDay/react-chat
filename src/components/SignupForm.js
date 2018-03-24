import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Button from 'material-ui/Button';
import { CardContent } from 'material-ui/Card';
import Input, { InputLabel } from 'material-ui/Input';
import { FormControl } from 'material-ui/Form';
import { withStyles } from 'material-ui/styles';

const styles = () => ({
  formControl: {
    display: 'block',
    marginBottom: '12px',
  },
  input: {
    width: '100%',
  },
  submitBtn: {
    marginTop: '16px',
  },
});

class SignupForm extends Component {
  static propTypes = {
    classes: PropTypes.objectOf(PropTypes.string).isRequired,
    signup: PropTypes.func.isRequired,
  }

  state = {
    username: '',
    password: '',
    passwordConfirmation: '',
  }

  handleFieldChange(field, evt) {
    this.setState({
      [field]: evt.target.value,
    });
  }

  signup = () => {
    if (this.state.password !== this.state.passwordConfirmation) {
      return;
    }

    this.props.signup({
      username: this.state.username,
      password: this.state.password,
    });
  }

  render() {
    const { classes } = this.props;

    return (
      <React.Fragment>
        <CardContent>
          <FormControl className={classes.formControl} required>
            <InputLabel htmlFor="username">Name</InputLabel>
            <Input
              id="username"
              className={classes.input}
              onChange={evt => this.handleFieldChange('username', evt)}
              placeholder="Type your username"
            />
          </FormControl>
          <FormControl className={classes.formControl} required>
            <InputLabel htmlFor="password">Password</InputLabel>
            <Input
              id="password"
              className={classes.input}
              type="password"
              onChange={evt => this.handleFieldChange('password', evt)}
              placeholder="Type your password"
            />
          </FormControl>
          <FormControl className={classes.formControl} required>
            <InputLabel htmlFor="confirmPassword">Confirm password</InputLabel>
            <Input
              id="confirmPassword"
              className={classes.input}
              type="password"
              onChange={evt => this.handleFieldChange('passwordConfirmation', evt)}
              placeholder="Repeat your password"
            />
          </FormControl>
          <Button
            className={classes.submitBtn}
            variant="raised"
            color="primary"
            fullWidth
            onClick={this.signup}
          >
            Sign up
          </Button>
        </CardContent>
      </React.Fragment>
    );
  }
}

export default withStyles(styles)(SignupForm);

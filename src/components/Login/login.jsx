import React, { Component } from 'react';
import './login.scss';

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      password: '',
      formErrors: { name: '', password: '' },
      nameValid: true,
      passwordValid: true,
      formValid: false,
    };

    this.onNameChange = this.onNameChange.bind(this);
    this.onPasswordChange = this.onPasswordChange.bind(this);
  }

  onNameChange({ target }) {
    const { value } = target;
    if (value !== '') {
      this.setState({ name: value, nameValid: true });
    } else {
      this.setState({ nameValid: false });
    }
    this.validateForm();
  }

  onPasswordChange({ target }) {
    const { value } = target;
    if (value !== '') {
      this.setState({ password: value, passwordValid: true });
    } else {
      this.setState({ passwordValid: false });
    }
    this.validateForm();
  }

  validateForm() {
    const { passwordValid, nameValid } = this.state;
    this.setState({ formValid: passwordValid && nameValid });
  }

  submit() {
    const { login } = this.props;
    login();
  }

  render() {
    const { passwordValid, nameValid, formValid } = this.state;
    return (
      <form onSubmit={this.submit}>
        <label htmlFor="name">User Name: </label>
        <input
          type="text"
          name="name"
          className={nameValid ? '' : 'invalid'}
          onChange={this.onNameChange}
          autoFocus
        />
        <label htmlFor="password">Password: </label>
        <input
          type="password"
          name="password"
          className={passwordValid ? '' : 'invalid'}
          onChange={this.onPasswordChange}
        />
        {(!passwordValid || !nameValid) && (
          <p style={{ color: 'red' }}>Invalid name or password</p>
        )}
        {formValid && (
          <button type="submit" className="button" onClick={this.submit}>
            Login
          </button>
        )}
        {!formValid && (
          <button
            disabled
            type="submit"
            className="button"
            onClick={this.submit}
          >
            Login
          </button>
        )}
      </form>
    );
  }
}

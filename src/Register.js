import React from 'react';
// import { Router, Route, Link, IndexRoute, hashHistory, browserHistory, DefaultRoute } from 'react-router'
import valRegister from './Validation';

console.log(valRegister);

// REGISTER
class Register extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: "",
      password: "",
      confirmPassword: "",
      email: ""
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleUserChange = this.handleUserChange.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
    this.handleConfirmPassChange = this.handleConfirmPassChange.bind(this);
    this.handleEmail = this.handleEmail.bind(this);
  }

  handleUserChange(event) {
    this.setState({
      user: event.target.value
    });
  };

  handlePasswordChange(event) {
    this.setState({
      password: event.target.value
    });
  };

  handleConfirmPassChange(event) {
    this.setState({
      confirmPassword: event.target.value
    });
  };

  handleEmail(event) {
    this.setState({
      email: event.target.value
    });
  };

  handleSubmit(event) {
    event.preventDefault();
    this.setState({
      user: "",
      password: "",
      confirmPassword: "",
      email: ""
    });
  };


  render() {
    const {
      user, password, confirmPassword, email
    } = this.state;

    return (
      <div>
        <form id="Form" onSubmit={this.handleSubmit}>
          <label htmlFor="username">Username</label>
          <input
            type="User"
            placeholder="username"
            value={user}
            onChange={this.handleUserChange}
          />
          <label htmlFor="password">Password</label>
          <input
            type="Password"
            placeholder="password"
            value={password}
            onChange={this.handlePasswordChange}
          />
          <label htmlFor="confirmPassword">Confirm Password</label>
          <input
            type="Password"
            placeholder="password"
            value={confirmPassword}
            onChange={this.handleConfirmPassChange}
          />
          <label htmlFor="email">Email</label>
          <input
            type="email"
            placeholder="email"
            value={email}
            onChange={this.handleEmail}
          />
          <button type="Submit">Register</button>
        </form>
      </div>
    )
  };
}

export default Register;
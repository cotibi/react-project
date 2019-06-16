import React from 'react';
//import { Router, Route, Link, IndexRoute, hashHistory, browserHistory, DefaultRoute } from 'react-router'
import validForm from './Validation';

/*LOGIN*/
class Login extends React.Component {
  constructor(props) {
    super(props); 
    this.state = {
      user: "",
      password: ""
    };
    this.handleUserChange = this.handleUserChange.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    /*this.validateForm = this.validateForm.bind(this);*/
  }


  handleUserChange(e) {

    this.setState({
      user: e.target.value
    });

    console.log(e.target.value);
  }

  handlePasswordChange(event) {
    console.log(event.target.value)
    this.setState({
      password: event.target.value
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    this.setState({
      user: "",
      password: ""
    });
  }


  render() {
    const {
      user, password
    } = this.state;

    console.log('user', user, "password", password);
    return (
      <div>
        <form id="Form" onSubmit={this.handleSubmit}>
          <label>Username
            <input
              type="user"
              placeholder="username"
              value={user}
              //onChange={(e) => this.handleUserChange(e)}
              onChange={this.handleUserChange}
            />
          </label>
          <label htmlFor="password">Password</label>
          <input
          id="password"
            type="password"
            placeholder="password"

            value={password}
            onChange={this.handlePasswordChange}
          />
          <button
            disabled={!validForm.validateLogin(user, password)}
            type="submit" value="Submit">
            Log In
              </button>
        </form>
      </div>
    );
  }
};

export default Login;

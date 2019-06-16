import React, {Component} from 'react';
//import { Router, Route, Link, IndexRoute, hashHistory, browserHistory, DefaultRoute } from 'react-router'
import './App.css';
import Login from './Login'
import Register from './Register'
//import Homepage from './Homepage'

//Main Container
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      login: <Login />,
      register: <Register />
    };
  }
  render() {
    return (
      <div className="container">
        <h3>Container</h3>
        <WelcomeText />
        <Login />
      </div>
    );
  }
};

const WelcomeText = () => {
  return (
    <div>
      <p>Please log in in or register.</p>
      <button>Login</button>
      <button>Register</button>
    </div>
  );
}

export default App;

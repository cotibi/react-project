import React from 'react';
import { Router, Route, Link, IndexRoute, hashHistory, browserHistory, DefaultRoute } from 'react-router'

//HomePage

class Homepage extends React.Component {
    constructor(props) {
      super(props);
    }
  
    render() {
      return (
        <div className="homepage">
          <h4>You have reached the homepage</h4>
        </div>
      );
    }
  }
  
  export default Homepage;
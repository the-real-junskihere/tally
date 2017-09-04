import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import TallyHome from '../tally/components/tally-home';
import SignUp from '../users/components/signup';
import Login from '../users/components/login';


class MainRoute extends Component {
  render() {
    return (
      <div>
        <Route exact path="/" component={TallyHome} />
        <Route exact path="/tally-home" component={TallyHome} />
        <Route exact path="/users/signup" component={SignUp} />
        <Route exact path="/users/login" component={Login} />
      </div>
    );
  }
}

export default MainRoute;

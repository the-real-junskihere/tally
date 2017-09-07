import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import TallyHome from '../tally/components/tally-home';
import CreateRopic from '../tally/components/createTopic';
import SignUp from '../users/components/signup';
import Login from '../users/components/login';


class MainRoute extends Component {
  render() {
    return (
      <div className='container'>
        <Route exact path="/" component={TallyHome} />
        <Route exact path="/tally-home" component={TallyHome} />
        <Route exact path="/topics/create" component={CreateRopic} />
        <Route exact path="/users/signup" component={SignUp} />
        <Route exact path="/users/login" component={Login} />
      </div>
    );
  }
}

export default MainRoute;

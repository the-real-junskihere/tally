import React, { Component } from 'react';
import { Route, withRouter, Redirect } from 'react-router-dom';
import TallyHome from '../tally/components/tally-home';


class MainRoute extends Component {
  render() {
    return (
      <div>
        <Route exact path="/" component={TallyHome} />
        <Route exact path="/tally-home" component={TallyHome} />
      </div>
    )
  }
}

export default MainRoute;

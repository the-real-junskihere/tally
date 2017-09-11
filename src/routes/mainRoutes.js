import React, { Component } from 'react';
import { Route, withRouter, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import TallyHome from '../tally/components/tally-home';
import CreateTopic from '../tally/components/createTopic';
import SignUp from '../users/components/signup';
import Login from '../users/components/login';


const AuthChecker = ({ component: TargetComponent, signedIn: isAtuhenticated, ...rest }) => (
  <Route { ...rest } render={props => (
    isAtuhenticated ? (
      <TargetComponent { ...props } />
    ) : (
      <Redirect to={{
        pathname: '/users/login',
        state: { form: props.location },
      }} />
    )
  )} />
);

class MainRoute extends Component {
  render() {
    return (
      <div className='container'>
        <Route exact path="/" component={TallyHome} />
        <Route exact path="/tally-home" component={TallyHome} />
        <Route exact path="/users/signup" component={SignUp} />
        <Route exact path="/users/login" component={Login} />

        <AuthChecker exact path="/topics/create" component={CreateTopic} signedIn={this.props.signedIn} history={this.props.history} />
        <AuthChecker exact path="/topics/about/:id" component={CreateTopic} signedIn={this.props.signedIn} history={this.props.history} />
      </div>
    );
  }
}

export default withRouter(connect((state) => {
  return {
    signedIn: state.authReducers.signedIn,
  };
})(MainRoute));

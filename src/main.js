import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { checkIfAuthenticated } from './users/actions/authsRelated';


import MainRoute from './routes/mainRoutes';

class Main extends Component {

  componentDidMount() {
    this.props.dispatch(checkIfAuthenticated());
  }
  componentWillReceiveProps(nextProps) {
    console.log(nextProps);
  }
  render() {
    return (
      <div>
        <ul>
            <li><Link to="/users/signup">SignUp</Link></li>
            <li><Link to="/users/login">Login</Link></li>
            <li><Link to="/tally-home">Tally Home</Link></li>
        </ul>

        <MainRoute />
      </div>
    );
  }
}

export default withRouter(connect((state) => {
  return {
    user: state.usersReducer.user,
    signedIn: state.usersReducer.signedIn,
    error: state.usersReducer.error,
  };
})(Main));

import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { checkIfAuthenticated, logout } from './users/actions/authsRelated';


import MainRoute from './routes/mainRoutes';

class Main extends Component {
  constructor(props) {
    super(props);

    this.handleLogout = this.handleLogout.bind(this);
  }

  componentDidMount() {
    this.props.dispatch(checkIfAuthenticated());
  }

  handleLogout() {
    this.props.dispatch(logout());
  }

  render() {
    return (
      <div>

        {
          this.props.signedIn ? (
            <ul>
              <li><a href='!#' onClick={this.handleLogout}>Logut</a></li>
              <li><Link to="/tally-home">Tally Home</Link></li>
            </ul>
          ) : (
            <ul>
              <li><Link to="/users/signup">SignUp</Link></li>
              <li><Link to="/users/login">Login</Link></li>
            </ul>
          )
        }

        <MainRoute />
      </div>
    );
  }
}

export default withRouter(connect((state) => {
  return {
    auth: state.authReducers.auth,
    signedIn: state.authReducers.signedIn,
    error: state.authReducers.error,
  };
})(Main));

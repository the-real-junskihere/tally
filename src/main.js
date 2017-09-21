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

  componentWillMount() {
    this.props.dispatch(checkIfAuthenticated());
  }

  handleLogout(event) {
    event.preventDefault();
    this.props.dispatch(logout());
  }

  render() {
    return (
      <div>
        {
          this.props.showLoading ? (
            <div className="container">
              <h1> LOADING...... </h1>
            </div>
          ) : (
            <div className="row">
                <nav>
                  <div className="nav-wrapper">
                    <a href="!#" className="brand-logo">Who-One</a>
                    {
                      this.props.signedIn ? (
                        <ul className="right hide-on-med-and-down">
                          <li><Link to="/tally-home">Tally Home</Link></li>
                          <li><Link to="/topics/about/taesss">tae</Link></li>
                          <li><Link to="/topics/create">create Topic</Link></li>
                          <li><a href='!#' onClick={this.handleLogout}>Logut</a></li>
                          </ul>
                        ) : (
                        <ul className="right hide-on-med-and-down">
                          <li><Link to="/users/signup">SignUp</Link></li>
                          <li><Link to="/users/login">Login</Link></li>
                          </ul>
                        )
                    }
                  </div>
                </nav>
              <div className="row">
                <MainRoute />
              </div>
            </div>
          )
        }

      </div>
    );
  }
}

export default withRouter(connect((state) => {
  return {
    auth: state.authReducers.auth,
    signedIn: state.authReducers.signedIn,
    error: state.authReducers.error,
    showLoading: state.authReducers.showLoading,
  };
})(Main));

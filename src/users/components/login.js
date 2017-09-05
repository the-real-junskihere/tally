import React, { Component } from 'react';
import { connect } from 'react-redux';
import { login, loginWithOAUTH } from '../actions/authsRelated';

class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: null,
      password: null,
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleLoginWithGoogle = this.handleLoginWithGoogle.bind(this);
    this.handleLoginWithFacebook = this.handleLoginWithFacebook.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.dispatch(login(this.state));
  }

  handleInputChange(event) {
    const { target } = event;
    const { value, name } = target;


    this.setState({
      [name]: value,
    });
  }
  handleLoginWithGoogle() {
    this.props.dispatch(loginWithOAUTH('google'));
  }
  handleLoginWithFacebook() {
    this.props.dispatch(loginWithOAUTH('facebook'));
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input type='text' name='email' id='email' onChange={this.handleInputChange} required />
          <input type='password' name='password' id='password' onChange={this.handleInputChange} required />
          <button type='submit'>login</button>
          <button type='reset'>reset</button>
        </form>
        <button type='button' onClick={this.handleLoginWithGoogle}>Login with Google</button>
        <button type='button' onClick={this.handleLoginWithFacebook}>Login with Facebook</button>
      </div>
    );
  }
}

export default connect((state) => {
  return {
    auth: state.authReducers.auth,
    signedIn: state.authReducers.signedIn,
    error: state.authReducers.error,
  };
})(Login);

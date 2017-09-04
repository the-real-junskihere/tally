import React, { Component } from 'react';
import { connect } from 'react-redux';
import { login } from '../actions/authsRelated';

class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: null,
      password: null,
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
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

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input type='text' name='email' id='email' onChange={this.handleInputChange} required />
          <input type='password' name='password' id='password' onChange={this.handleInputChange} required />
          <button type='submit'>login</button>
          <button type='reset'>reset</button>
        </form>
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

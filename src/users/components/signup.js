import React, { Component } from 'react';
import { connect } from 'react-redux';
import { signup } from '../actions/authsRelated';

class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: null,
      password: null,
      name: null,
      imageUrl: null,
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.dispatch(signup(this.state));
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
          <input type='text' name='name' id='email' onChange={this.handleInputChange} required />
          <input type='text' name='imageUrl' id='email' onChange={this.handleInputChange} required />
          <input type='text' name='email' id='email' onChange={this.handleInputChange} required />
          <input type='password' name='password' id='password' onChange={this.handleInputChange} required />
          <button type='submit'>signup</button>
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
})(SignUp);

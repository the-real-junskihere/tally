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

  componentDidMount() {
    window.$(document).ready(() => {
      window.Materialize.updateTextFields();
    });
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
      <div className='row'>
        <form className='col s12' onSubmit={this.handleSubmit}>
          <div className="input-field">
            <input type='text' name='name' id='email' onChange={this.handleInputChange} required />
            <label htmlFor="name">Name</label>
          </div>
          <div className="input-field">
            <input type='text' name='imageUrl' id='email' onChange={this.handleInputChange} required />
            <label htmlFor="imageUrl">Image Url</label>
          </div>
          <div className="input-field">
            <input type='text' name='email' id='email' onChange={this.handleInputChange} required />
            <label htmlFor="email">Email</label>
          </div>
          <div className="input-field">
            <input type='password' name='password' id='password' onChange={this.handleInputChange} required />
            <label htmlFor="password">Password</label>
          </div>
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

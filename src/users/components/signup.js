import React, { Component } from 'react';

class SignUp extends Component {
  constructor(props) {
    super(props);

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    console.log('signingup');
  }

  render () {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input type='text' name='email' id='email' />
          <input type='password' name='password' id='password' />
          <button type='submit'>signup</button>
          <button type='reset'>reset</button>
        </form>
      </div>
    )
  }
}

export default SignUp;

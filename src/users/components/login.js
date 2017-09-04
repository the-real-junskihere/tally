import React, { Component } from 'react';

class Login extends Component {
  render () {
    return (
      <div>
        <form>
          <input type='text' name='email' id='email' />
          <input type='password' name='password' id='password' />
          <button>login</button>
        </form>
      </div>
    )
  }
}

export default Login;

import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import MainRoute from './routes/mainRoutes';

class Main extends Component {
  render() {
    return (
      <div>
        <ul>
            <li><Link to="/tally-home">Tally Home</Link></li>
        </ul>

        <MainRoute />
      </div>
    );
  }
}

export default Main;

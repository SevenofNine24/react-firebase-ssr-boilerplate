import React, { Component } from 'react';
import { StaticRouter } from 'react-router'
import Switches from './routes/Switches'

class ServerApp extends Component {
  render() {
    return (
      <StaticRouter {...this.props}>
        <Switches />
      </StaticRouter>
    );
  }
}

export default ServerApp
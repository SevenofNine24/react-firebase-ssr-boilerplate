import React, { Component } from 'react';
import { StaticRouter } from 'react-router'
import routes from './routes/index'
import Switches from './routes/Switches'

class ServerApp extends Component {
  render() {
    return (
      <StaticRouter {...this.props}>
        <Switches routes={routes} />
      </StaticRouter>
    );
  }
}

export default { ServerApp, routes }
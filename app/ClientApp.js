import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom'
import routes from './routes/index'
import Switches from './routes/Switches'

class ClientApp extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switches routes={routes} /> 
      </BrowserRouter>
    );
  }
}

export default ClientApp
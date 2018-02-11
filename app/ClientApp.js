import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom'
import Switches from './routes/Switches'

class ClientApp extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switches /> 
      </BrowserRouter>
    );
  }
}

export default ClientApp
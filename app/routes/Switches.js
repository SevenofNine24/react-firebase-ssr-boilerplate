import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom'
import routes from './index'

class Switches extends Component {
  render() {
    let index = 0
    return (
      <Switch>
        {routes.map(route => (
          <Route exact {...route} key={index++} />
        ))}
      </Switch>
    );
  }
}

export default Switches
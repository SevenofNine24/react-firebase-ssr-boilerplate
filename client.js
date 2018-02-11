import React from 'react'
import { render, hydrate } from 'react-dom'
import ClientApp from './app/ClientApp'
import Loadable from 'react-loadable';

if(module.hot) {
  render(<ClientApp />, document.getElementById("root"))
} else {
  Loadable.preloadReady().then(() => {
    hydrate(<ClientApp />, document.getElementById("root"))
  })
}


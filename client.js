import React from 'react'
import { render, hydrate } from 'react-dom'
import Loadable from 'react-loadable'
import ClientApp from './app/ClientApp'

if(module.hot) {
  render(<ClientApp />, document.getElementById("root"))
} else {
  Loadable.preloadReady().then(() => {
    hydrate(<ClientApp />, document.getElementById("root"))
  })
}


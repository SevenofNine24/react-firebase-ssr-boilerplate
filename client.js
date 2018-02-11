import React from 'react'
import { render, hydrate } from 'react-dom'
import ClientApp from './app/ClientApp'

if(module.hot) {
  render(<ClientApp />, document.getElementById("root"))
} else {
  hydrate(<ClientApp />, document.getElementById("root"))
}


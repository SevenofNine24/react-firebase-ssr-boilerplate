const express = require('express')
const bundle = require('./bundle')
const react = require('react')
const reactDOM = require('react-dom/server')
const template = require('./template')
const path = require('path')

express()
  .get("/", (req, res) => {
    const html = reactDOM.renderToString(
      react.createElement(bundle.ServerApp)
    )
    res.send(template({
      body: html,
      initialState: JSON.stringify({})
    }))
  })
  .listen(5000, () => {
    console.log("listening")
  })
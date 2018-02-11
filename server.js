
const PORT = process.env.PORT || 5000
const express = require('express')
const bundle = require('./build/server.bundle.js')
const react = require('react')
const reactDOM = require('react-dom/server')
const template = require('./public/template')
const path = require('path')

express()
  .use(express.static('build'))
  .get("**", (req, res) => {
    const html = reactDOM.renderToString(
      react.createElement(bundle.ServerApp)
    )
    res.send(template({
      body: html,
      initialState: JSON.stringify({})
    }))
  })
  .listen(PORT, () => {
    console.log("listening on port " + PORT)
  })
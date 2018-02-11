const functions = require('firebase-functions');
const express = require('express')
const bundle = require('./bundle')
const react = require('react')
const reactDOM = require('react-dom/server')
const template = require('./template')
const app = express()

app.get("/", (req, res) => {
  const html = reactDOM.renderToString(
    react.createElement(bundle.ServerApp)
  )
  res.send(template({
    body: html,
    initialState: JSON.stringify({})
  }))
})

//app.listen(5000)

exports.app = functions.https.onRequest(app)
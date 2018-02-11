const compression = require('compression')
const PORT = process.env.PORT || 5000
const express = require('express')
const bundle = require('./build/server.bundle.js')
const react = require('react')
const reactDOM = require('react-dom/server')
const template = require('./public/template')
const path = require('path')

express()
  .use(compression())
  .use("/", express.static("build"))
  .use("/", express.static("public"))
  .get("**", (req, res) => {
    let context = {}
    const html = reactDOM.renderToString(
      react.createElement(bundle.ServerApp, {
        context: context, 
        location: req.url
      })
    )
    
    if (context.url) {
      res.redirect(context.url)
    } else {
      res
      .status(context.status || 200)
      .send(template({
        body: html,
        initialState: JSON.stringify({})
      }))
    }
  })
  .listen(PORT, () => {
    console.log("listening on port " + PORT)
  })
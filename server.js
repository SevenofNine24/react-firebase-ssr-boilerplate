import compression from 'compression'
import ServerApp from './app/ServerApp'
import React from 'react'
import Loadable from 'react-loadable'
import { renderToString } from 'react-dom/server'
import template from './app/template'
const express = require('express')
const path = require('path')
const fs = require('fs')

const PORT = process.env.PORT || 5000
const app = express()

app.use(compression())
  .use("/", express.static("build"))
  .use("/static", express.static("public"))
  .get("**", (req, res) => {
    let modules = []
    let context = {}
    const body = renderToString(
      <ServerApp />
    )

    if (context.url) {
      res.redirect(context.url)
    } else {
      res.status(context.status || 200)
        .send(template({
          body,
          initialState: JSON.stringify({}),
          modules
        }))
    }
  })

Loadable.preloadAll().then(() => {
  app.listen(PORT, () => {
    console.log("listening on port " + PORT)
  })
})

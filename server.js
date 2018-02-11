import compression from 'compression'
import ServerApp from './app/ServerApp'
import React from 'react'
import Loadable, { Capture } from 'react-loadable'
import { renderToString } from 'react-dom/server'
import { getBundles } from 'react-loadable/webpack'
import stats from './build/react-loadable.json';
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
      <Capture report={m => { modules.push(m) }}>
        <ServerApp />
      </Capture>
    )

    let bundles = getBundles(stats, modules)

    if (context.url) {
      res.redirect(context.url)
    } else {
      res.status(context.status || 200)
        .send(template({
          body,
          initialState: JSON.stringify({}),
          modules: bundles
        }))
    }
  })

Loadable.preloadAll().then(() => {
  app.listen(PORT, () => {
    console.log("listening on port " + PORT)
  })
})

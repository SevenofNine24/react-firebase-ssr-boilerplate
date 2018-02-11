import compression from 'compression'
import ServerApp from './app/ServerApp'
import React from 'react'
import { renderToString } from 'react-dom/server'
import Loadable from 'react-loadable'
import { getBundles } from 'react-loadable/webpack'
import stats from './build/react-loadable.json';
import template from './app/template'
const express = require('express')
const path = require('path')
const fs = require('fs')

const PORT = process.env.PORT || 5000
const app = express()

app
  .use(compression())
  .use("/", express.static("build"))
  .use("/", express.static("public"))
  .get("**", (req, res) => {

    let context = {}
    let modules = []
    const html = renderToString(
      <Loadable.Capture report={m => modules.push(m)}>
        <ServerApp />
      </Loadable.Capture>
    )
    let bundles = getBundles(stats, modules);

    if (context.url) {
      res.redirect(context.url)
    } else {
      res
      .status(context.status || 200)
      .send(template({
        body: html,
        initialState: JSON.stringify({}),
        bundles: bundles
      }))
    }
  })

Loadable.preloadAll().then(() => {
  app.listen(PORT, () => {
    console.log("listening on port " + PORT)
  })
})
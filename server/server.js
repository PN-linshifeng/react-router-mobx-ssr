const express = require('express');
const fs = require("fs");
const favicon = require('express-favicon');
const path = require("path")
const serverRender = require('./util/server-render')

const isDev = process.env.NODE_ENV === 'development';
const app = express();


app.use(favicon(path.join(__dirname, '../public/favicon.ico')));
if (!isDev) {
  const serverApp = require('../dist/server.js');
  const template = fs.readFileSync(path.join(__dirname, '../dist/server.ejs'), 'utf8');
  app.use('/public', express.static(path.join(__dirname, '../dist')));
  app.get("*", function(req, res, next) {
    serverRender(serverApp, template, req, res).catch(next)
    // const html = ReactSSR.renderToString(serverApp);
    // res.send(template.replace('<!--app-->', html))
  });
} else {
  const devStatic = require('./util/dev-static');
  devStatic(app);
  console.log("dev")
}

//报错中间件next
app.use(function(error, req, res, next) {
  console.log(error)
  res.status(500).send(error)
})

app.listen(3333, function() {
  console.log('host:3333')
})

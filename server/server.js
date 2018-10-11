const express = require('express');
const fs = require("fs");
const ReactSSR = require('react-dom/server');

const path = require("path")
const isDev = process.env.NODE_ENV === 'development';
const app = express();



if (!isDev) {
  const serverApp = require('../dist/server.js').default;
  const template = fs.readFileSync(path.join(__dirname, '../dist/index.html'), 'utf8');
  app.use('/public', express.static(path.join(__dirname, '../dist')));
  app.get("*", function(req, res) {
    const html = ReactSSR.renderToString(serverApp);
    res.send(template.replace('<!--app-->', html))
  });
} else {
  const devStatic = require('./util/dev-static');
  devStatic(app);
  console.log("dev")
}
app.listen(3333, function() {
  console.log('host:3333')
})

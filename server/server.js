const express = require('express');
const fs = require("fs");
const ReactSSR = require('react-dom/server');
const serverApp = require('../dist/server.js').default;
const path = require("path")
const template = fs.readFileSync(path.join(__dirname, '../dist/index.html'), 'utf8')
const app = express();
app.use('/ss', express.static(path.join(__dirname, '../dist')))
app.get("*", function(req, res) {
	const html = ReactSSR.renderToString(serverApp);
	res.send(template.replace('<app></app>', html))
})

app.listen(3333, function() {
	console.log('host:3333')
})
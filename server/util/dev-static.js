const axios = require('axios'); //http请求工具
const webpack = require('webpack');
const path = require('path');
const MemoryFs = require('memory-fs');
const serverConfig = require('../../build/webpack.config.server');
const ReactDomServer = require('react-dom/server');
const proxy = require('http-proxy-middleware');

const getTemplate = () => {
  return new Promise((resolve, reject) => {
    axios.get('http://192.168.2.38:8100/public/index.html')
      .then(res => {
        resolve(res.data)
      })
      .catch(reject => {
        console.log('http://localhost:8100/')
        throw reject;
      })
  })
}
let serverBundle;
const serverCompiler = webpack(serverConfig);
const mfs = new MemoryFs;
const Module = module.constructor;
serverCompiler.outputFileSystem = mfs; //默认fs硬盘读写，mfs内存读写

serverCompiler.watch({}, (err, stats) => {
  if (err) {
    console.log("错误打印内容");
    throw err; //错误打印内容
  }
  stats = stats.toJson();
  stats.warnings.forEach(warn => console.log(warn)); //打印警告

  const bundlePath = path.join(
    serverConfig.output.path,
    serverConfig.output.filename
  );
  const bundle = mfs.readFileSync(bundlePath, 'utf-8');

  const m = new Module();
  m._compile(bundle, 'server.js'); //用module解析bundle string内容
  serverBundle = m.exports.default;

});
module.exports = function(app) {
  app.use('/public', proxy({
    target: 'http://192.168.2.38:8100'
  }));
  app.get("*", function(req, res) {
    // res.send("888");
    getTemplate().then(template => {
      const content = ReactDomServer.renderToString(serverBundle);
      let html = template.replace(/<!-- app -->/gm, content);
      // console.log(content);
      // res.send("888");
      res.send(template.replace(/<!-- app -->/gm, content));
    })
  })
}

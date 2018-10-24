const axios = require('axios'); //http请求工具
const webpack = require('webpack');
const path = require('path');
const MemoryFs = require('memory-fs');
const ReactDomServer = require('react-dom/server');
const proxy = require('http-proxy-middleware');
const Helmet = require('react-helmet').default;
const ejs = require("ejs");
const asyncBootstrapper = require('react-async-bootstrapper');
const serverConfig = require('../../build/webpack.config.server');

const getTemplate = () => {
  return new Promise((resolve, reject) => {
    axios.get('http://192.168.2.38:8100/public/server.ejs')
      .then(res => {
        resolve(res.data)
      })
      .catch(reject => {
        console.log('http://localhost:8100/')
        throw reject;
      })
  })
}

// console.log("---", asyncBootstrapper);
let serverBundle, createStoreMap;
const serverCompiler = webpack(serverConfig);
const mfs = new MemoryFs;
const Module = module.constructor;
serverCompiler.outputFileSystem = mfs; //默认fs硬盘读写，mfs内存读写

const getStoreState = (stores) => {
  return Object.keys(stores).reduce((result, storeName) => {
    console.log(result)
    result[storeName] = stores[storeName].toJson();
    return result
  }, {})
}

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
  console.log(9888888888)
  // serverBundle = m.exports.default; //react 打包入口
  // createStoreMap = m.exports.createStoreMap;
  // console.log("server is succes")

});


module.exports = function(app) {
  app.use('/public/', proxy({
    target: 'http://192.168.2.38:8100'
  }));
  app.get("*", function(req, res) {
    // res.send("888");
    getTemplate().then(template => {
      const routerContext = {};
      const store = createStoreMap();
      const app = serverBundle(store, routerContext, req.url);
      asyncBootstrapper(app).then(() => { // 这里可以拿到路由


        //服务端路由跳转
        if (routerContext.url) {
          res.status(302).setHeader("Location", routerContext.url);
          res.end();
          return;
        }
        const initialState = JSON.stringify(getStoreState(store))
        const content = ReactDomServer.renderToString(app); // 这里也可以拿到路由
        const helmet = Helmet.renderStatic();
        // res.send(template.replace(/<!-- app -->/gm, content));
        const html = ejs.render(template, {
          app: content,
          initialState: initialState,
          meta: '',
          title: helmet.title.toString(),
          link: 'link',
          style: 'style'
        });
        res.send(html)
      })
      // const content = ReactDomServer.renderToString(serverBundle);

    })
  })
}

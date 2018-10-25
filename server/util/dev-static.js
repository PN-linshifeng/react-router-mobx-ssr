const axios = require('axios'); //http请求工具
const webpack = require('webpack');
const path = require('path');
const MemoryFs = require('memory-fs');
const proxy = require('http-proxy-middleware');
const NativeModule = require('module')
const vm = require('vm')
const serverConfig = require('../../build/webpack.config.server');
const serverRender = require('./server-render.js');
const serverCompiler = webpack(serverConfig);

console.log(serverRender)

const getTemplate = () => {
  return new Promise((resolve, reject) => {
    axios.get('http://192.168.2.38:8100/public/server.ejs')
      .then(res => {
        resolve(res.data)
      })
      .catch(() => {
        console.log('http://localhost:8100/')
        throw (reject);
      })
  })
}

// console.log("---", asyncBootstrapper);
let serverBundle, createStoreMap;

const mfs = new MemoryFs;
serverCompiler.outputFileSystem = mfs; //默认fs硬盘读写，mfs内存读写


// `(function(exports, require, module, __finename, __dirname){ ...bundle code })`
const getModuleFromString = (bundle, filename) => {
  const m = { exports: {} }
  const wrapper = NativeModule.wrap(bundle)
  const script = new vm.Script(wrapper, {
    filename: filename,
    displayErrors: true,
  })
  const result = script.runInThisContext()
  result.call(m.exports, m.exports, require, m)
  return m
}

serverCompiler.watch({}, (err, stats) => {
  if (err) throw err
  stats = stats.toJson()
  stats.errors.forEach(err => console.error(err))
  stats.warnings.forEach(warn => console.warn(warn))

  const bundlePath = path.join(
    serverConfig.output.path,
    serverConfig.output.filename
  )
  // var js = require("../../dist/server.js");
  // console.log(js)

  const bundle = mfs.readFileSync(bundlePath, 'utf-8')
  const m = getModuleFromString(bundle, 'server.js')
  // serverBundle = m.exports.default
  // createStoreMap = m.exports.createStoreMap;
  serverBundle = m.exports
  console.log("server is succes")
})

module.exports = function(app) {
  app.use('/public/', proxy({
    target: 'http://192.168.2.38:8100'
  }));
  app.get("*", function(req, res, next) {

    getTemplate().then(template => {
      return serverRender(serverBundle, template, req, res)
      // const routerContext = {};
      // const store = createStoreMap();
      // const app = serverBundle(store, routerContext, req.url);
      // asyncBootstrapper(app).then(() => { // 这里可以拿到路由


      //   //服务端路由跳转
      //   if (routerContext.url) {
      //     res.status(302).setHeader("Location", routerContext.url);
      //     res.end();
      //     return;
      //   }
      //   const initialState = JSON.stringify(getStoreState(store))
      //   const content = ReactDomServer.renderToString(app); // 这里也可以拿到路由
      //   const helmet = Helmet.renderStatic();
      //   // res.send(template.replace(/<!-- app -->/gm, content));
      //   const html = ejs.render(template, {
      //     app: content,
      //     initialState: initialState,
      //     meta: '',
      //     title: helmet.title.toString(),
      //     link: 'link',
      //     style: 'style'
      //   });
      //   res.send(html)
      // })

      // const content = ReactDomServer.renderToString(serverBundle);


    }).catch(next)
  })
}

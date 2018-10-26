const ReactDomServer = require('react-dom/server');
const Helmet = require('react-helmet').default;
const ejs = require("ejs");
const asyncBootstrapper = require('react-async-bootstrapper');

const getStoreState = (stores) => {
  return Object.keys(stores).reduce((result, storeName) => {
    result[storeName] = stores[storeName].toJson();
    return result
  }, {})
}

module.exports = (bundle, template, req, res) => {
  return new Promise((resolve, reject) => {
    const createStoreMap = bundle.createStoreMap;
    console.log(createStoreMap)
    const serverBundle = bundle.default;
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
        meta: helmet.meta.toString(),
        title: helmet.title.toString(),
        link: helmet.link.toString(),
        style: helmet.style.toString()
      });
      res.send(html)
      resolve()
    }).catch(reject)
  })
}

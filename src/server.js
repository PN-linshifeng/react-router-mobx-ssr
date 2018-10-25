import React from "react";
import {
  StaticRouter
} from "react-router-dom";
import {
  Provider,
  useStaticRendering
} from "mobx-react";
import App from '@pages/App';
import {
  createStoreMap
} from "./store/store"

//让mobx在服务端渲染的时候不好重复数据变换
useStaticRendering(true);
export default (strore, routerContext, url) => {
  return (
    <Provider {...strore}>
      <StaticRouter context={routerContext} location={url}>
        <App />
      </StaticRouter>
    </Provider>
  )
};

export {
  createStoreMap
}

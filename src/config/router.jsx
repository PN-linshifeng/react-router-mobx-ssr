import React from "react";
import {
  Route
} from "react-router-dom";
import Home from '@container/Home';
import NotFound from '@container/404';

export default () => [
  <Route path="/" component={Home} key="home" exact />,
  <Route path="/404" component={NotFound} key="404" />
];

import React from "react";
import {
  Route,
  Redirect
} from "react-router-dom";
import Home from '@container/Home';
import NotFound from '@container/404';

export default () => [
  <Route path="/" component={Home} key="home" exact />,
  <Route path="/app" key="apps" render={()=>{return <Redirect to='/404' key="ss"></Redirect>}}></Route>,
  <Route path="/404" component={NotFound} key="404" />
];

import React from "react";
import {
  BrowserRouter,
  Route,
  Switch,
  Redirect
} from "react-router-dom";
import routes from './routes.js'

class RouterMap extends React.Component {
  render() {
    return (
      <Switch>
					{routes.map((route,index) => (
				      <Route {...route} key={index}/>
				    ))}
					<Redirect from="/index.html" to="/"></Redirect>
			</Switch>

    )
  }
}
export default RouterMap;
// {routes.map((route,index) => (
// 				      <Route {...route} key={index}/>
// 				    ))}
// <Redirect from='/news' to="/reg"/>

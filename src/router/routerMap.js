import React from "react";
import {
	BrowserRouter,
	Route,
	Switch,
	Redirect
} from "react-router-dom";
// import * as ss from "react-router";
// console.log(ss)
import routes from './routes.js'

import Home from "../container/Home/index.jsx";
import MarketCommentary from '@container/MarketCommentary'

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
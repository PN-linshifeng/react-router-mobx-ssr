import React from "react";
import ReactDOM from "react-dom";
import {
	BrowserRouter
} from "react-router-dom";
import RouterMap from './router/routerMap.js'
import './scss/style.scss'
import Home from "@container/404";

ReactDOM.render(<BrowserRouter>
			<RouterMap></RouterMap>
		</BrowserRouter>, document.getElementById("zhiku"))
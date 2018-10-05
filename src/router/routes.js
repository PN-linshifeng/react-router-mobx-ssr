//页面
import Home from "@container/Home"
import MarketCommentary from "@container/MarketCommentary"
// import NoPage from "../container/404/index.jsx";

const routes = [{
	path: '/',
	exact: true,
	component: Home

}, {
	path: '/market-commentary.html',
	component: MarketCommentary
}];


export default routes;
// <Route path= '/'	component={Home}/>
// <Route path="/market-commentary" component={MarketCommentary} />
import React from 'react';
import {
	Link
} from 'react-router-dom';
import Header from "@component/Header";

import './style.scss'
import '@images/home-banner-txt.png'

class MarketCommentary extends React.Component {
	constructor(prop){
		super(prop);
	}
	render(){
		return(
			<div>
				<Header />
				<div className="container-full about-banner">
					<div className="container">
						9999
					</div>
				</div> 
			</div>	
		);
	}
}
export default MarketCommentary;
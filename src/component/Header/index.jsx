import React from 'react';
import {Link,NavLink} from 'react-router-dom';

import './style.scss'
import Logo from '../../static/images/logo.png';

export default ()=>{

		return(
  <div className="container-full header">
    <div className="container">
      <div className="logo"><Link to=""><img src={Logo} alt="智库28Logo" /></Link></div>
      <div className="nav">
        <ul>
          <li>
            <NavLink to="/" exact>首页</NavLink>
          </li>
          <li>
            <NavLink to="/market-commentary.html">AETOS汇评</NavLink>
          </li>
          <li>
            <NavLink to="/daily-express">策略微观</NavLink>
          </li>
          <li>
            <NavLink to="/ketang">外汇交易微课堂</NavLink>
          </li>
          <li>
            <NavLink to="/news">市场要闻</NavLink>
          </li>
          <li>
            <NavLink to="/forex">外汇经纪商</NavLink>
          </li>
        </ul>
      </div>
    </div>
  </div>
		);

}

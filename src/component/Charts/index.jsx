import React from "react";
import {Link} from "react-router-dom";
require('jquery');
import PerfectScrollbar from '../../static/js/perfect-scrollbar.min.js';
import './style.scss';
class Charts extends React.Component{
	constructor(props){
		super(props);
	}
    componentDidMount(){
        setTimeout(function(){
            const ps = new PerfectScrollbar('.scroll-charts');
        }, 0)
    }
	render(){
		return(
			<div className="economic-component table-box">
				<table className="table-thead">
									        <thead>
									          <tr>
									            <th valign="middle" width="20%">产品</th>
									            <th valign="middle" width="20%">买价</th>
									            <th valign="middle" width="20%">卖价</th>
									            <th valign="middle" width="20%">最高 </th>
									            <th valign="middle" width="20%">最低</th>
									          </tr>
									        </thead>
									        </table>
									        <div className="border">
									        <div className="scroll scroll-charts">
									        <table className="table-body">
									        	<tbody>
													<tr name="EURUSD" >
        <td width="20%">EURUSD</td>
        <td width="20%" className="drop">1.17632</td>
        <td width="20%" className="drop">1.17651</td>
        <td width="20%">1.17675</td>
        <td width="20%">1.17551<span></span></td>
    </tr>
    <tr name="image" >
        <td colSpan="5" ><img src="https://static.aetoscg.com/MT4/EURUSD1_409x286x2.gif?radom=1537942540758" /></td>
    </tr>
    <tr name="AUDUSD" >
        <td >AUDUSD</td>
        <td className="liter">0.72636</td>
        <td className="liter">0.72666</td>
        <td>0.72820</td>
        <td>0.72448<span></span></td>
    </tr>
    <tr name="USDJPY" >
        <td >USDJPY</td>
        <td className="drop">112.868</td>
        <td className="drop">112.893</td>
        <td>113.015</td>
        <td>112.843<span></span></td>
    </tr>
    <tr name="GBPUSD" >
        <td >GBPUSD</td>
        <td className="liter">1.31700</td>
        <td className="liter">1.31730</td>
        <td>1.31808</td>
        <td>1.31613<span></span></td>
    </tr>
    <tr name="NZDUSD" >
        <td >NZDUSD</td>
        <td className="liter">0.66650</td>
        <td className="liter">0.66680</td>
        <td>0.66859</td>
        <td>0.66408<span></span></td>
    </tr>
    <tr name="USDCHF" >
        <td >USDCHF</td>
        <td className="drop">0.96454</td>
        <td className="drop">0.96476</td>
        <td>0.96563</td>
        <td>0.96410<span></span></td>
    </tr>
    <tr name="USDCAD" >
        <td >USDCAD</td>
        <td className="liter">1.29528</td>
        <td className="liter">1.29559</td>
        <td>1.29623</td>
        <td>1.29436<span></span></td>
    </tr>
    <tr name="EURCAD" >
        <td >EURCAD</td>
        <td className="liter">1.52370</td>
        <td className="liter">1.52416</td>
        <td>1.52467</td>
        <td>1.52245<span></span></td>
    </tr>
    <tr name="EURCHF" >
        <td >EURCHF</td>
        <td className="drop">1.13459</td>
        <td className="drop">1.13501</td>
        <td>1.13536</td>
        <td>1.13398<span></span></td>
    </tr>
    <tr name="EURGBP" >
        <td >EURGBP</td>
        <td className="liter">0.89297</td>
        <td className="liter">0.89331</td>
        <td>0.89333</td>
        <td>0.89230<span></span></td>
    </tr>
    <tr name="EURJPY" >
        <td >EURJPY</td>
        <td className="liter">132.774</td>
        <td className="liter">132.806</td>
        <td>132.937</td>
        <td>132.685<span></span></td>
    </tr>
    <tr name="EURNZD" >
        <td >EURNZD</td>
        <td className="liter">1.76427</td>
        <td className="liter">1.76485</td>
        <td>1.77057</td>
        <td>1.75831<span></span></td>
    </tr>
    <tr name="AUDCHF" >
        <td >AUDCHF</td>
        <td className="drop">0.70064</td>
        <td className="drop">0.70107</td>
        <td>0.70241</td>
        <td>0.69916<span></span></td>
    </tr>
    <tr name="AUDCAD" >
        <td >AUDCAD</td>
        <td className="drop">0.94093</td>
        <td className="drop">0.94137</td>
        <td>0.94262</td>
        <td>0.93875<span></span></td>
    </tr>
    <tr name="EURAUD" >
        <td >EURAUD</td>
        <td className="liter">1.61903</td>
        <td className="liter">1.61952</td>
        <td>1.62299</td>
        <td>1.61494<span></span></td>
    </tr>
    <tr name="GBPAUD" >
        <td >GBPAUD</td>
        <td className="drop">1.81277</td>
        <td className="drop">1.81324</td>
        <td>1.81831</td>
        <td>1.80924<span></span></td>
    </tr>
    <tr name="AUDJPY" >
        <td >AUDJPY</td>
        <td className="drop">81.985</td>
        <td className="drop">82.027</td>
        <td>82.226</td>
        <td>81.853<span></span></td>
    </tr>
    <tr name="AUDNZD" >
        <td >AUDNZD</td>
        <td className="liter">1.08949</td>
        <td className="liter">1.08992</td>
        <td>1.09116</td>
        <td>1.08562<span></span></td>
    </tr>
    <tr name="GBPCAD" >
        <td >GBPCAD</td>
        <td className="liter">1.70601</td>
        <td className="liter">1.70654</td>
        <td>1.70789</td>
        <td>1.70498<span></span></td>
    </tr>
    <tr name="GBPCHF" >
        <td >GBPCHF</td>
        <td className="liter">1.27035</td>
        <td className="liter">1.27082</td>
        <td>1.27206</td>
        <td>1.26974<span></span></td>
    </tr>
    <tr name="GBPJPY" >
        <td >GBPJPY</td>
        <td className="liter">148.656</td>
        <td className="liter">148.702</td>
        <td>148.923</td>
        <td>148.548<span></span></td>
    </tr>
    <tr name="GBPNZD" >
        <td >GBPNZD</td>
        <td className="liter">1.97520</td>
        <td className="liter">1.97600</td>
        <td>1.98340</td>
        <td>1.97000<span></span></td>
    </tr>
    <tr name="CADCHF" >
        <td >CADCHF</td>
        <td className="drop">0.74443</td>
        <td className="drop">0.74487</td>
        <td>0.74529</td>
        <td>0.74409<span></span></td>
    </tr>
    <tr name="CADJPY" >
        <td >CADJPY</td>
        <td className="liter">87.114</td>
        <td className="liter">87.158</td>
        <td>87.222</td>
        <td>87.084<span></span></td>
    </tr>
    <tr name="CHFJPY" >
        <td >CHFJPY</td>
        <td className="liter">116.993</td>
        <td className="liter">117.039</td>
        <td>117.100</td>
        <td>116.934<span></span></td>
    </tr>
    <tr name="NZDJPY" >
        <td >NZDJPY</td>
        <td className="liter">75.229</td>
        <td className="liter">75.280</td>
        <td>75.510</td>
        <td>75.015<span></span></td>
    </tr>
    <tr name="DXY" >
        <td >DXY</td>
        <td className="liter">93.715</td>
        <td className="liter">93.775</td>
        <td>93.763</td>
        <td>93.683<span></span></td>
    </tr>
    <tr name="USDCNH" >
        <td >USDCNH</td>
        <td className="liter">6.87048</td>
        <td className="liter">6.87356</td>
        <td>6.87118</td>
        <td>6.86296<span></span></td>
    </tr>
									        	</tbody>
									      </table>
									      </div>
									      <div className="ft">
											<Link to="/news" className="btn-gridient">了解更多</Link>
									      </div>
									      </div>
			</div>
		)
	}
};

export default Charts;
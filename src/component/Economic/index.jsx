import React from "react";
import {Link} from "react-router-dom";
require('jquery');
import PerfectScrollbar from '../../static/js/perfect-scrollbar.min.js';
import './style.scss';
class Economic extends React.Component{
	constructor(props){
		super(props);
	}
	componentDidMount(){
		setTimeout(function(){
			const ps = new PerfectScrollbar('.scroll-economic');
		}, 0)
	}
	render(){
		return(
			<div className="economic-component table-box">
				<table className="table-thead">
									        <thead>
									          <tr>
									            <th width="60" valign="middle">GMT</th>
									            <th width="60" valign="middle">国家</th>
									            <th valign="middle">事件</th>
									            <th width="70" valign="middle">重要性 </th>
									            <th width="70" valign="middle" >前值</th>
									            <th width="70" valign="middle">预计值 </th>
									            <th width="70" valign="middle" >实际值</th>
									          </tr>
									        </thead>
									        </table>
									        <div className="border">
									        <div className="scroll scroll-economic">
									        <table className="table-body">
									        	<tbody className="economic-tbody" id="all_events">
									        	<tr className="quick">
									        		<td width="60">01:00</td>
									        		<td width="60">NZ</td>
									        		<td>9月ANZ活动前景</td>
									        		<td width="70"><span className="L">低</span></td>
									        		<td width="70">3.8</td>
									        		<td width="70">     --</td>
									        		<td width="70">7.8</td>
									        		</tr><tr><td>01:00</td><td>NZ</td><td>9月ANZ商业信心指数</td><td><span className="L">低</span></td><td>-50.3</td><td>     --</td><td>-38.3</td></tr><tr><td>06:00</td><td>JN</td><td>日本8月机床订单同比</td><td><span className="L">低</span></td><td>5.3%</td><td>     --</td><td>     --</td></tr><tr><td>06:45</td><td>FR</td><td>法国9月消费者信心指数</td><td><span className="L">低</span></td><td>97</td><td>97</td><td>     --</td></tr><tr><td>08:00</td><td>SZ</td><td>9月瑞信调查预期</td><td><span className="L">低</span></td><td>-14.3</td><td>     --</td><td>     --</td></tr><tr><td>08:00</td><td>UK</td><td>英国9月26日LME铝合金存量</td><td><span className="L">低</span></td><td>     --</td><td>     --</td><td>     --</td></tr><tr><td>08:00</td><td>UK</td><td>英国9月26日LME铜存量</td><td><span className="H">高</span></td><td>     --</td><td>     --</td><td>     --</td></tr><tr><td>08:00</td><td>UK</td><td>英国9月26日LME铅存量</td><td><span className="H">高</span></td><td>     --</td><td>     --</td><td>     --</td></tr><tr><td>08:00</td><td>UK</td><td>英国9月26日LME镍存量</td><td><span className="H">高</span></td><td>     --</td><td>     --</td><td>     --</td></tr><tr><td>08:00</td><td>UK</td><td>英国9月26日LME原铝存量</td><td><span className="H">高</span></td><td>     --</td><td>     --</td><td>     --</td></tr><tr><td>08:00</td><td>UK</td><td>英国9月26日LME主要NASAAC存量</td><td><span className="L">低</span></td><td>     --</td><td>     --</td><td>     --</td></tr><tr><td>08:00</td><td>UK</td><td>英国9月26日LME钢坯存量</td><td><span className="L">低</span></td><td>     --</td><td>     --</td><td>     --</td></tr><tr><td>08:00</td><td>UK</td><td>英国9月26日LME锌存量</td><td><span className="L">低</span></td><td>     --</td><td>     --</td><td>     --</td></tr><tr><td>08:00</td><td>UK</td><td>英国9月26日LME锡存量</td><td><span className="L">低</span></td><td>     --</td><td>     --</td><td>     --</td></tr><tr><td>08:30</td><td>UK</td><td>英国8月英国住房融资贷款</td><td><span className="L">低</span></td><td>39584</td><td>39700</td><td>     --</td></tr><tr><td>10:00</td><td>UK</td><td>英国9月CBI零售报告销售量</td><td><span className="L">低</span></td><td>29</td><td>17</td><td>     --</td></tr><tr><td>10:00</td><td>UK</td><td>英国9月英国工业联合会分销贸易调查销售总额</td><td><span className="L">低</span></td><td>24</td><td>     --</td><td>     --</td></tr><tr><td>11:00</td><td>US</td><td>美国9月21日MBA抵押贷款申请指数</td><td><span className="H">高</span></td><td>1.6%</td><td>     --</td><td>     --</td></tr><tr><td>13:00</td><td>RU</td><td>9月24日CPI周环比</td><td><span className="H">高</span></td><td>0.0%</td><td>     --</td><td>     --</td></tr><tr><td>13:00</td><td>RU</td><td>9月24日每周CPI-年迄今</td><td><span className="H">高</span></td><td>2.4%</td><td>     --</td><td>     --</td></tr><tr><td>14:00</td><td>US</td><td>美国8月新建住宅销售</td><td><span className="H">高</span></td><td>627k</td><td>630k</td><td>     --</td></tr><tr><td>14:00</td><td>US</td><td>美国8月新建住宅销售 月环比</td><td><span className="H">高</span></td><td>-1.7%</td><td>0.5%</td><td>     --</td></tr><tr><td>14:30</td><td>US</td><td>美国9月21日DOE美国原油库存</td><td><span className="H">高</span></td><td>-2057k</td><td>     --</td><td>     --</td></tr><tr><td>14:30</td><td>US</td><td>美国9月21日DOE俄克拉荷马州库欣原油库存</td><td><span className="H">高</span></td><td>-1250k</td><td>     --</td><td>     --</td></tr><tr><td>14:30</td><td>US</td><td>美国9月21日DOE美国汽油库存</td><td><span className="H">高</span></td><td>-1719k</td><td>     --</td><td>     --</td></tr><tr><td>14:30</td><td>US</td><td>美国9月21日DOE U.S. Distillate Inventor...</td><td><span className="H">高</span></td><td>839k</td><td>     --</td><td>     --</td></tr><tr><td>14:30</td><td>US</td><td>美国9月21日DOE U.S. Refinery Utilizatio...</td><td><span className="H">高</span></td><td>-2.20%</td><td>     --</td><td>     --</td></tr><tr><td>14:30</td><td>US</td><td>美国9月21日DOE原油引伸需求</td><td><span className="H">高</span></td><td>19318</td><td>     --</td><td>     --</td></tr><tr><td>14:30</td><td>US</td><td>美国9月21日DOE汽油引伸需求</td><td><span className="L">低</span></td><td>10230.3</td><td>     --</td><td>     --</td></tr><tr><td>14:30</td><td>US</td><td>美国9月21日DOE蒸馏油引伸需求</td><td><span className="L">低</span></td><td>5478.1</td><td>     --</td><td>     --</td></tr><tr><td>18:00</td><td>US</td><td>美国9月27日Interest Rate on Excess Rese...</td><td><span className="L">低</span></td><td>1.95%</td><td>     --</td><td>     --</td></tr><tr><td>18:00</td><td>US</td><td>美国9月26日FOMC利率决策(上限)</td><td><span className="H">高</span></td><td>2.00%</td><td>2.25%</td><td>     --</td></tr><tr><td>18:00</td><td>US</td><td>美国9月26日FOMC利率决策(下限)</td><td><span className="L">低</span></td><td>1.75%</td><td>2.00%</td><td>     --</td></tr><tr><td>21:00</td><td>NZ</td><td>9月27日RBNZ 官方现金利率</td><td><span className="H">高</span></td><td>1.75%</td><td>1.75%</td><td>     --</td></tr></tbody>
									      </table>
									      </div>
									      <div className="ft">
											距离下个事件日期： 04:47 <Link to="/news" className="btn-gridient">了解更多</Link>
									      </div>
									      </div>
			</div>
		)
	}
};

export default Economic;
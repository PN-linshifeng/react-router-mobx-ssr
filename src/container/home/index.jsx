import React from 'react';
import {
	Link
} from 'react-router-dom';
import $ from 'jquery';
// import Swiper from 'swiper';
import {Helmet} from 'react-helmet';
import Header from "@component/Header";
import Economic from "@component/Economic";
import Charts from "@component/Charts";
import Footer from "@component/Footer";

import './style.scss';


class Home extends React.Component {
	constructor(prop){
		super(prop);
	}
	componentDidMount(){
		console.log($(".home-team .container").width())
		var mySwiper = new Swiper('.home-team .swiper-container',{
			slidesPerView : 2,
			spaceBetween : 50,
		});
		$('.home-team .prev').click(function(){
		    mySwiper.slidePrev();
		  });
		  $('.home-team .next').click(function(){
		    mySwiper.slideNext();
		  });

		  var adSwiper = new Swiper('.swiper-ad', {
			autoplay: true,//可选选项，自动滑动
			pagination: {
			    el: '.swiper-pagination',
			    clickable :true,
			  },
		})
	}
	render(){
		console.log(9)
		return(
			<div className="222">
				<Helmet>
					<title>智库28</title>

				</Helmet>
				<Header />
				{/*banner*/}
				<div className="container-full home-banner margin-block">
					<div className="container">
						<div className="txt">
							<img src={require('@images/home-banner-txt.png')} alt=""/>
						</div>
						<div className="img">
							<img src={require('@images/home-banner-img.png')} alt=""/>
						</div>
					</div>
				</div> 
				{/*新闻早班车*/}
				<div className="container-full home-news-block margin-block clearfix">
					<div className="container">
						<div className="txt">
							<h2>“新闻早班车”<br/>AETOS艾拓思专场</h2>
							<p>时间：每交易日上午09:10 （北京时间）</p>
							<p><Link className="btn-gridient" to="/xx">请联系您的AETOS艾拓思IB报名参加</Link></p>
						</div>
						<div className="img">
							<img src={require('@images/home-news-img.png')} alt="新闻早班车"/>
						</div>
					</div>
				</div>

				{/*多项目*/}
				<div className="container-full home-item-block">
					<div className="container">
						<div className="item left">
							<h3>策略微观</h3>
							<div className="img">
								<img src={require('@images/home-item-img01.png')} alt="策略微观"/>								
							</div>
							<div className="info">
								每天为您纵观市场动向交易策略智珠在握
							</div>
							<div className="ft">
								<Link className="btn-gridient" to="/daily-express">查看详情</Link>
							</div>
						</div>
						<div className="item middle">
							<h3>外汇交易微课堂</h3>
							<div className="img">
								<img src={require('@images/home-item-img02.png')} alt="外汇交易微课堂"/>								
							</div>
							<div className="info">
								深入浅出助你轻松掌握外汇交易技巧
							</div>
							<div className="ft">
								<Link className="btn-gridient" to="/daily-express">查看详情</Link>
							</div>
						</div>
						<div className="item right">
							<h3>开立模拟账户</h3>
							<div className="img">
								<img src={require('@images/home-item-img03.png')} alt="开立模拟账户"/>								
							</div>
							<div className="info">
								费在真实的市场报价环境中，学习交易技巧，实践交易策略
							</div>
							<div className="ft">
								<Link className="btn-gridient" to="/daily-express">查看详情</Link>
							</div>
						</div>
					</div>
				</div>
				{/*财经日历--外汇行情*/}
				<div className="container-full home-economic-calendar-forex">
					<div className="container clearfix">
						<div className="box">
							<div className="item  economic-calendar">
								<div className="">
									<h3 className="page-title"><span>财经日历<em></em><em></em></span></h3>
									<div className="content">
										<Economic />
									</div>
								</div>
							</div>
							<div className="item  charts">
								<div className="">
									<h3 className="page-title"><span>外汇行情<em></em><em></em></span></h3>
									<div className="content">
										<Charts />
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				{/*讲师团队*/}
				<div className="container-full home-team">
					<div className="container">
						<h3 className="page-title"><span>AETOS艾拓思华人分析师团队与您在线互动<em></em><em></em></span></h3>
						<div className="swiper-container swiper-container1" style={{width:'1100px'}}>
						  <div className="swiper-wrapper">
						    <div className="swiper-slide blue-slide">
								<div className="hd bfc">
									<div className="f-l">
										<img src="http://www.zhiku28.com/images/head_img01.jpg" alt="Danny Chan 陈迪" />
									</div>
									<div className="f-r">
										<h3>Danny Chan 陈迪</h3>
										<p>AETOS艾拓思资本集团中华区营销总监</p>
									</div>
								</div>
								<div className="bd">
									<p className="ln">
										交易理念：把脉宏观基本面变化，适度结合技术形态，一切从简跟踪趋势，实现最大空间可操作化。
									</p>
									<p>Danny的研究主要集中在外汇、贵金属、国内和国际宏观经济等领域，专注全球宏观经济对货币购买力的影响与走势，对国际宏观经济具有独特的分析视角，同时对商品价格与通胀输送有着独特的展望与分析。</p>
									<p>对于投资者迈进全球后危机时代，给予了货币汇率与利率的波动新一阶段的规律分析，将投资者对于全球化结构性问题的洞察与市场情绪变化的反映需求不断提高，完善了投资对于短期的效率优化。</p>
									<p>Danny受邀于汤森路透、CCTV等多家著名财经媒体作市场评论及分析。</p>
									<div><span className="btn-gridient">请联系您的IB报名参加</span></div>
								</div>
							</div>
							 <div className="swiper-slide blue-slide">
								<div className="hd bfc">
									<div className="f-l">
										<img src="http://www.zhiku28.com/images/head_img02.jpg" alt="Danny Chan Andreus Qiu 邱骥" />
									</div>
									<div className="f-r">
										<h3>Andreus Qiu 邱骥</h3>
										<p>AETOS艾拓思资本集团中华区运营部副总监</p>
									</div>
								</div>
								<div className="bd">
									<p className="ln">
										交易理念：投资就像烹饪，产品就是食材，食材新鲜就够，美味需要火候。想获得最优的回报，就要懂得各种食材的属性，有的金融产品适合长线，有的适合短线。各种产品的组合会给你意想不到的收获。
									</p>
									<p>Andreus透过悉心研究和不断探索，对金融分析形成了独到的见解和认识。擅于通过各种分析把握投资者心理变化和市场脉搏。从技术和数据角度客观理性的分析盘面，稳重果断，注重节奏；并长期跟踪多种货币走势。</p>
									<p>对国际及国内宏观经济态势以及行业发展状况亦有着深度的分析和研究， 通过研究投资市场的整体运行环境制定投资策略， 解读市场资讯和行业研究报告，对现有的投资策略情况与表现进行评估、分析与改进。</p>
									<div><span className="btn-gridient">请联系您的IB报名参加</span></div>
								</div>
							</div>
							<div className="swiper-slide blue-slide">
								<div className="hd bfc">
									<div className="f-l">
										<img src="http://www.zhiku28.com/images/head_img03.jpg" alt="Matthew Choi 蔡世樑" />
									</div>
									<div className="f-r">
										<h3>Matthew Choi 蔡世樑</h3>
										<p>AETOS资本集团高级分析师</p>
									</div>
								</div>
								<div className="bd">
									<p className="ln">
										交易理念：“市场千百变，盈利绕千弯”投资者必须勇于尝试每一种交易产品和策略才能于任何环境中获取最大盈利。
									</p>
									<p>Matthew Choi毕业于澳大利亚Griffith University，主修财务和风险管理，先后任职于多家知名全球性金融投资机构，涉足不同类别的金融资产类别，对外汇、股票及衍生工具拥有丰富的投资经验和独到的交易策略。Matthew Choi擅长以基本因素分析大市走向，透过技术形态捕捉交易机会。Matthew Choi现居于悉尼，在加入AETOS之前，曾出任汇丰金融（亚洲）企业部投资顾问，凯基证劵（亚洲）私人投资部助理副总裁等要职，专注于外汇与期货交易和投资方案业务，对大市分析、交易策略具有精辟独到的见解。</p>
									<div><span className="btn-gridient">请联系您的IB报名参加</span></div>
								</div>
							</div>

						  </div>
						</div>
						<span className="prev"></span>
						<span className="next"></span>
					</div>
				</div>
				{/*banner 广告*/}
				<div className="container-full home-ad ">
					<div className="container">
						<div className="swiper-container swiper-ad"  style={{width:'1100px'}}>
						  <div className="swiper-wrapper">
						    <div className="swiper-slide"><img src={require('@images/ad.png')} alt=""/></div>
						    <div className="swiper-slide"><img src={require('@images/ad.png')} alt=""/></div>
						    <div className="swiper-slide"><img src={require('@images/ad.png')} alt=""/></div>
						  </div>
						  <div className="swiper-pagination">&nbsp;</div>
						</div>
					</div>
				</div>
				{/*Footer*/}
				<Footer />
			</div>	
		);
	}
}
export default Home;
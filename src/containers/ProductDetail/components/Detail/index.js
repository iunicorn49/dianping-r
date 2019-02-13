import React, { Component } from 'react';
import './style.css'

class Detail extends Component {
	render() {
		return (
			<div className="detail">
				<div className="detail__header">
					<span>团购详情</span>
					<i className="detail__headerIcon"></i>
				</div>
				<table cellPadding="0" cellSpacing="0" className="detail__table">
					<tbody>
						<tr className="detail__row">
							<th className="detail__category" colSpan="3">饮品</th>
						</tr>
						<tr className="detail__row">
							<td>商品名称</td>
							<td className="detail__td--alignRight">1扎</td>
							<td className="detail__td--alignRight">48元</td>
						</tr>
						<tr className="detail__row">
							<td />
							<td className="detail__td--price">
								最高价值
								<br />
								<strong className="detail__td--priceNew">
									团购价
								</strong>
							</td>
							<td className="detail__td--price">
								58元
								<br />
								<strong className="detail__td--priceNew">
									19.9元
								</strong>
							</td>
						</tr>
					</tbody>
				</table>
				<div className="detail__remark">
					备注信息
				</div>
				<div className="detail__more">
					<span>更多图文详情</span>
					<span className="detail__notice">(建议WIFI环境下打开, 土豪随意!)</span>
					<i className="detail__arrow"></i>
				</div>
			</div>
		);
	}
}

export default Detail;
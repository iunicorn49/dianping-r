import React, { Component } from "react";
import "./style.css";

const dls = [
  { title: "有效期", content: "2018-10-20至2019-09-15" },
  { title: "除外日期", content: "有效期内周末、法定节假日可用" },
  { title: "使用时间", content: "团购券使用时间：11:00-22:00" },
  { title: "预约提醒", content: "无需预约，消费高峰时可能需要等位" },
  { title: "规则提醒", content: "每张团购券建议2人使用" },
  { title: "包间", content: "可用包间，条件为：详询商户" },
  {
    title: "堂食外带",
    content: "仅限堂食，不提供餐前外带，餐毕未吃完可打包，打包费详情咨询商家"
  },
  { title: "商家服务", content: "提供免费WiFi" }
];

class Remark extends Component {
  render() {
    return (
      <div className="remark">
        <div className="remark__header">
          购买须知
          <i className="remark__icon" />
        </div>
        <div className="remark__list">
          {dls.map((dl, dlIndex) => (
            <dl className="remark__item">
              <dt className="remark__itemTitle">{dl.title}</dt>
              <dd className="remark__itemDesc">{dl.content}</dd>
            </dl>
          ))}
        </div>
      </div>
    );
  }
}

export default Remark;

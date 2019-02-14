import React, { Component } from "react";
import "./style.css";

class Remark extends Component {
  render() {
    const { purchaseNotes, validityPeriod } = this.props.data;
    const dls = [{ title: "有效期", content: validityPeriod }].concat(
      purchaseNotes
    );
    return (
      <div className="remark">
        <div className="remark__header">
          购买须知
          <i className="remark__icon" />
        </div>
        <div className="remark__list">
          {dls.map((dl, dlIndex) => (
            <dl key={dlIndex} className="remark__item">
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

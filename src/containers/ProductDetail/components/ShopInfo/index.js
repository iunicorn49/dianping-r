import React, { Component } from "react";
import "./style.css";

class ShopInfo extends Component {
  render() {
    const { shop: name, star, address, phone } = this.props.data;
    const { total } = this.props;
    return (
      <div className="shopInfo">
        <div className="shopInfo__header">
          使用商户 ({total})
          <span className="shopInfo__arrow" />
        </div>
        <div className="shopInfo__middle">
          <div className="shopInfo__middleLeft">
            <div className="shopInfo__shopName">{name}</div>
            <div>
              <div className="shopInfo__starsWrapper">
                <span className="shopInfo__stars">
                  <i
                    style={{ width: 2 * star + "%" }}
                    className="shopInfo__stars--red"
                  />
                </span>
              </div>
              <span className="shopInfo__distance">> 100km</span>
            </div>
          </div>
          <a href={`tel://${phone}`} className="shopInfo__middleRight">
            <i className="shopInfo__phoneIcon" />
          </a>
        </div>
        <div className="shopInfo__bottom">
          <i className="shopInfo__locationIcon" />
          {address}
        </div>
      </div>
    );
  }
}

export default ShopInfo;

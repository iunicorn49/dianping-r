import React, { Component } from "react";
import { dataSource } from "./data";
import "./style.css";
import LikeItem from '../LikeItem'

class LikeList extends Component {
  render() {
    const data = dataSource
    return (
      <div className="likeList">
        <div className="likeList__title">猜你喜欢</div>
        <div className="likeList__list">
        {
          data.map((item, index) => {
            return <LikeItem key={item.id} data={item} />
          })
        }
        </div>
      </div>
    );
  }
}

export default LikeList;
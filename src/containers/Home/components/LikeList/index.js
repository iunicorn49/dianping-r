import React, { Component } from "react";
import { dataSource } from "./data";
import "./style.css";
import LikeItem from "../LikeItem";
import Loading from '../../../../components/Loading'

class LikeList extends Component {
  constructor(props) {
    super(props);
    this.myRef = React.createRef(); // 获取真实dom
    this.state = {
      data: dataSource,
      loadTimes: 1 // 加载过的次数, 最多加载两次
    };
    this.removeListener = false;
  }
  render() {
    const { data, loadTimes } = this.state;
    return (
      <div ref={this.myRef} className="likeList">
        <div className="likeList__header">猜你喜欢</div>
        <div className="likeList__list">
          {data.map((item, index) => {
            return <LikeItem key={index} data={item} />;
          })}
        </div>
        {loadTimes < 3 ? (
          <Loading />
        ) : (
          <a className="likeList__viewAll">查看更多</a>
        )}
      </div>
    );
  }

  componentDidMount() {
    document.addEventListener("scroll", this.handleScroll);
  }

  componentDidUpdate() {
    if (this.state.loadTimes >= 3 && !this.removeListener) {
      document.removeEventListener("scroll", this.handleScroll);
      this.removeListener = true;
    }
  }

  componentWillUnmount() {
    if (!this.removeListener) {
      document.removeEventListener("scroll", this.handleScroll);
    }
  }

  handleScroll = () => {
    const scrollTop =
      document.documentElement.scrollTop || document.body.scrollTop; // 获取滚动的距离
    const screenHeight = document.documentElement.clientHeight; // 可视区域高度
    const likeListTop = this.myRef.current.offsetTop; // 组件距离页面顶部的距离
    const likeListHeight = this.myRef.current.offsetHeight; // 组件的高度
    console.log({scrollTop, df:(likeListHeight + likeListTop - screenHeight)})
    if (scrollTop >= likeListHeight + likeListTop - screenHeight) {
      console.log('dsdsd')
      const newData = this.state.data.concat(dataSource);
      const newLoadTimes = this.state.loadTimes + 1;
      setTimeout(() => {
        this.setState({
          data: newData,
          loadTimes: newLoadTimes
        });
      }, 1000);
    }
  };
}

export default LikeList;

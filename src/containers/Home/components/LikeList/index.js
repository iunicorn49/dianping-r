import React, { Component } from "react";
import "./style.css";
import LikeItem from "../LikeItem";
import Loading from "../../../../components/Loading";

class LikeList extends Component {
  constructor(props) {
    super(props);
    this.myRef = React.createRef(); // 获取真实dom
    this.removeListener = false;
  }
  render() {
    const { data, pageCount } = this.props;
    return (
      <div ref={this.myRef} className="likeList">
        <div className="likeList__header">猜你喜欢</div>
        <div className="likeList__list">
          {data.map((item, index) => {
            return <LikeItem key={index} data={item} />;
          })}
        </div>
        {pageCount < 3 ? (
          <Loading />
        ) : (
          <a className="likeList__viewAll">查看更多</a>
        )}
      </div>
    );
  }

  componentDidMount() {
    if (this.props.pageCount === 0) {
      // 只加载一次
      this.props.fetchData();
    }
    if (this.props.pageCount < 3) {
      // 最多加载三次, 如果已经加载完成, 就不需要再挂载事件了
      document.addEventListener("scroll", this.handleScroll);
    } else {
      this.removeListener = true;
    }
  }

  componentDidUpdate() {
    if (this.props.pageCount >= 3 && !this.removeListener) {
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
    if (scrollTop >= likeListHeight + likeListTop - screenHeight) {
      this.props.fetchData();
    }
  };
}

export default LikeList;

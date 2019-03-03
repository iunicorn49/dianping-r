import React, { Component } from 'react';
import './style.css'

class PopularSearch extends Component {
  render() {
    const { data } = this.props
    return (
      <div className="popularSearch">
        {
          data.map((item) => {
            return (
              <span onClick={this.handleClick.bind(this, item)} className="popularSearch__item" key={item.id}>{item.keyword}</span>
            )
          })
        }
      </div>
    );
  }
  handleClick = item => {
    this.props.onClickItem(item)
  }
}

export default PopularSearch;
import React, { Component } from 'react';
import "./style.css"

class ErrorToast extends Component {
  render() {
    const { msg } = this.props
    return (
      <div className="errorToast">
        <div className="errorToast__text">{msg}</div>
      </div>
    );
  }
  componentDidMount() { // 组件挂载时
    this.timer = setTimeout(() => {
      this.props.clearError();
    }, 3000)
  }
  componentWillUnmount() { // 组件卸载时
    if (this.timer) {
      clearTimeout(this.timer)
    }
  }
}

export default ErrorToast;
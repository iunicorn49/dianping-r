import React, { Component } from "react";
import Slider from "react-slick";
import { dataSource } from "./data";
import "./style.css";

class Headline extends Component {
  render() {
    const settings = {
      slidesToShow: 1,
      swipeToSlide: true,
      autoplay: true,
      vertical: true
    };
    return (
      <div className="headline">
        <div className="headline__logo" />
        <div className="headline__slider">
          <Slider {...settings}>
            {dataSource.map((item, index) => {
              return (
                <a
                  key={index}
                  className="headline__sliderInner"
                  href={item.url}
                >
                  <div className="headline__sliderTitle">{item.title}</div>
                  <div className="headline__sliderImgWrapper">
                    <img alt="" src={item.pic} className="headline__sliderImg" />
                  </div>
                </a>
              );
            })}
          </Slider>
        </div>
      </div>
    );
  }
}

export default Headline;

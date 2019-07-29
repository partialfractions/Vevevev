import React from "react";
import Swiper from "react-id-swiper";
import "react-id-swiper/lib/styles/css/swiper.css";
// import "react-id-swiper/lib/styles/scss/swiper.min.css";

export default class Carousel extends React.Component {
  renderPrevButton = () => {
    return <h1 style={{ color: "white" }}>{"<"}</h1>;
  };
  render() {
    const params = {
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev"
      },
      slidesPerView: "2.25",
      spaceBetween: 10,
      loop: true,
      mousewheel: true
    };
    return <Swiper {...params}>{this.props.items}</Swiper>;
  }
}

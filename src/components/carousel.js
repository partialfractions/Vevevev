import React from "react";
import Swiper from "react-id-swiper";
import "react-id-swiper/lib/styles/scss/swiper.scss";
import "react-id-swiper/lib/styles/css/swiper.css";

class Carousel extends React.Component {
  render() {
    const params = {
      navigation: {
        nextEl: ".swiper-button-next.swiper-button-white",
        prevEl: ".swiper-button-prev.swiper-button-white"
      },
      slidesPerView: "auto",
      grabCursor: true,
      spaceBetween: 10,
      loop: true,
      mousewheel: true
    };

    return (
      <Swiper style={{ height: 400 }} {...params}>
        {this.props.items}
      </Swiper>
    );
  }
}

export default Carousel;

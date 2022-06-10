import React, { Component } from "react";
import Slider from "react-slick";

class Home extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 3000,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 4000
    };
    return (
      <div class="container">
      <Slider {...settings}>
          <img width="100%"  src={require('../assets/image/1.jpg')} />
          <img width="100%" src={require('../assets/image/2.jpg')} />
          <img width="100%"  src={require('../assets/image/3.jpg')} />
          <img width="100%"src={require('../assets/image/4.jpg')} />
      </Slider>
      </div>
    );
  }
}

export default Home

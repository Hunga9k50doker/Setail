import React from "react";
import styled from "styled-components";
// import data
import BannerArr from "../../../assets/fake-data/Banner";

// import components
import Helmet from "../../../components/Helmet/Helmet";
import CarouselSlider from "../../../components/Carousel/CarouselSlider";

import "../../App.scss";
import "./slider.scss";
  var nav_on_top = document.querySelector(".nav__onTop");

console.log(nav_on_top);

const Slider = () => {
  return (
    <Helmet title="Destination Slider">
      <div className="component destination__list">
        <CarouselSlider></CarouselSlider>
      </div>
    </Helmet>
  );
};

export default Slider;

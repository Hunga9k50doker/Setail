import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import cardData from "../../assets/fake-data/CardDetails";
import CardDetails from "../cards/cardDetails/cardDetails";

import "./CarouselCardTravel.scss";
const SlideCardTravel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    autoplay: true,
    slidesToScroll: 1,
  };
  return (
    <div className="slide__card ">
      <div className="slide__card-slick">
        <Slider {...settings}>
          {cardData.getAllCards().map((item, index) => (
            <CardDetails
              key={index}
              img={item.img}
              calendar={item.calendar}
              custom={item.custom}
              location={item.location}
              title={item.title}
              subTitle={item.subTitle}
              cost={Number(item.cost)}
              rating={item.rating}
              icon={item.icon}
            />
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default SlideCardTravel;

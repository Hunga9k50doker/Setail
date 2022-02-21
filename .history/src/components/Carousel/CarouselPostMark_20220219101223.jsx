import React, { useRef } from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import card__data__postmark from "../../assets/fake-data/Postmark";

import { to_slug, parallaxBackground } from "../../utils/utils";

import "./Carousel.scss";
const SlideStamp = (props) => {
  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "50px",
    speed: 500,
    slidesToShow: 5,
    autoplay: true,
    slidesToScroll: 1,

    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 400,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  let refBg = useRef();
  parallaxBackground(refBg.current);
  console.log(refBg.current);
  return (
    <div
      ref={refBg}
      className=" slide__card__review "
      style={{ backgroundImage: `url(${props.bgUrl})` }}
    >
      <div className="slide__card-slick selection__postmark">
        <Slider {...settings} ref={(c) => c}>
          {card__data__postmark.getAllCards().map((item, index) => (
            <Link
              key={index}
              to={"/tour-item/" + to_slug(item.title)}
              className="card__stamp"
            >
              <img
                className="card__stamp__img"
                src={item.img}
                alt={item.title}
              />
              <div className="card__stamp__content">
                <h3 className="card__stamp__title">{item.title}</h3>
                <p className="card__stamp__subTitle">{item.subTitle}</p>
              </div>
            </Link>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default SlideStamp;

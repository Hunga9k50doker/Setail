import React from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import styled from "styled-components";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import cardData from "../../assets/fake-data/CardDetails";
import CardDetails from "../cards/cardDetails/cardDetails";
import { to_slug } from "../../utils/utils";

import "./Carousel.scss";
const SlideCardTravel = () => {
  const settings = {
    dots: true,
    infinite: true,
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

  const NewStyle = styled.div`
    .card {
      &-header {
        position: relative;
        padding: unset;
        max-height: 165px;
        overflow: hidden;
        background: red;
      }
    }
  `;

  return (
    <div className="slide__card ">
      <div className="slide__card-slick">
        <Slider {...settings}>
          {cardData.getCards_random(12).map((item, index) => (
            <Link key={index} to={"/tour-item/" + to_slug(item.title)}>
              <NewStyle>
                <CardDetails
                  img={item.img}
                  calendar={item.calendar}
                  custom={item.custom}
                  location={item.location}
                  title={item.title}
                  subTitle={item.subTitle}
                  cost={Number(item.cost)}
                  rating={item.rating}
                  icon={
                    Number(item.rating) < 6
                      ? "fas fa-star-half-alt"
                      : "fas fa-star"
                  }
                />
              </NewStyle>
            </Link>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default SlideCardTravel;

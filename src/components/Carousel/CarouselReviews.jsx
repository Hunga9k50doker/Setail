import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import card__data from "../../assets/fake-data/CardUsers";
import CardReview from "../cards/cardReview/cardReview";
import { RatingStar, parallaxBackground } from "../../utils/utils";

import "./Carousel.scss";
const SlideCardReview = (props) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    autoplay: false,
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
  const ref = React.useRef();
  ref.current ? parallaxBackground(ref.current) : "";
  return (
    <div
      ref={ref}
      className=" slide__card__review "
      style={{ backgroundImage: `url(${props.bgUrl})` }}
    >
      <h2 className="review__title" style={{ marginTop: "100px" }}>
        TOP REVIEWS
      </h2>
      <h3 className="review__subtitle">
        Eirmod lorem et gubergren et diam erat consetetur et dolor, sit magna
        sanctus accusam invidunt dolor amet. Dolor sed et.
      </h3>

      <div className="slide__card-slick">
        <Slider {...settings}>
          {card__data.getCards_random(6).map((item, index) => (
            <div key={index} className="row">
              <div className="col ">
                <CardReview
                  img={item.img}
                  place={item.rating__info.map(
                    (e, id) => `${id === 0 && e.rating__place}`
                  )}
                  name={item.name}
                  star={item.rating__info.map(
                    (e, id) =>
                      id === 0 && (
                        <RatingStar key={id} rating={e.rating__score / 20} />
                      )
                  )}
                  description={item.rating__info.map(
                    (e, id) => `${id === 0 && e.rating}`
                  )}
                />
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default SlideCardReview;

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import cardData from "../../assets/fake-data/CardDetails";

import "./Carousel.scss";

const CarouselSlider = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    autoplay: true,
    slidesToScroll: 2,
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
  return (
    <div className="slide__team">
      <Slider {...settings}>
        {cardData
          .getAllCards()
          .filter((e) => e.type === "carousel__slider")
          .map((item, index) => (
            <div key={index} className="card__slider">
              <img className="card__slider__img" src={item.img} alt={item.title} />
              <h3 className="card__slider__title">{item.title}</h3>
              <p className="card__slider__subtitle">{item.subTitle}</p>
            </div>
          ))}
      </Slider>
    </div>
  );
};
export default CarouselSlider;

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import card_data from "../../assets/fake-data/CardUsers";
import CardRating from "../cards/cardRating/cardRating";

import "./CarouselCardRating.scss";

const SlideCardRating = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
  };
  return (
    <div className="slider__card__rating container">
      <Slider {...settings}>
        {card_data.getCards_random(3).map((item, index) => (
          <div className="item" key={index}>
            <CardRating
              img={item.img}
              description={'"' + item.rating + '"'}
              name={item.name}
            />
          </div>
        ))}
      </Slider>
      ;
    </div>
  );
};

export default SlideCardRating;

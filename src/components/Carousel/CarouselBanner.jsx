import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


const CarouselBanner = ({children}) => {
  const settings = {
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    infinite: true,
    speed: 500,
  };

  return (
    <div className="slide__banner">
      <div className="slide__card-slick">
        <Slider {...settings}>{children}</Slider>
      </div>
    </div>
  );
};

export default CarouselBanner;

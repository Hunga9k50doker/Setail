import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { TeamHolderItem } from "../cards/cardTeam/cardTeam";
import { teamData } from "../../assets/fake-data/CardTeams";

import "./Carousel.scss";

const CarouselTeam = () => {
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
        {teamData.map((item, index) => (
          <TeamHolderItem key={index} data={item} />
        ))}
      </Slider>
    </div>
  );
};
export default CarouselTeam;

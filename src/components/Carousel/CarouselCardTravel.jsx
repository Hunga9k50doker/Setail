import React from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import styled from "styled-components";

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
    // autoplay: true,
    slidesToScroll: 1,
  };

  const NewStyle = styled.div`
    .card {
      &-header {
        position: relative;
        padding: unset;
        max-height: 165px ;
        overflow: hidden;
        background: red;
      }
    }
  `;

  function to_slug(str) {
    // Chuyển hết sang chữ thường
    str = str.toLowerCase();

    // xóa dấu
    str = str.replace(/(à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ)/g, "a");
    str = str.replace(/(è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ)/g, "e");
    str = str.replace(/(ì|í|ị|ỉ|ĩ)/g, "i");
    str = str.replace(/(ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ)/g, "o");
    str = str.replace(/(ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ)/g, "u");
    str = str.replace(/(ỳ|ý|ỵ|ỷ|ỹ)/g, "y");
    str = str.replace(/(đ)/g, "d");

    // Xóa ký tự đặc biệt
    str = str.replace(/([^0-9a-z-\s])/g, "");

    // Xóa khoảng trắng thay bằng ký tự -
    str = str.replace(/(\s+)/g, "-");

    // xóa phần dự - ở đầu
    str = str.replace(/^-+/g, "");

    // xóa phần dư - ở cuối
    str = str.replace(/-+$/g, "");

    // return
    return str;
  }
  return (
    <div className="slide__card ">
      <div className="slide__card-slick">
        <Slider {...settings}>
          {cardData.getCards_random(12).map((item, index) => (
            <Link to={"/tour-item/" + to_slug(item.title)}>
              <NewStyle>
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
                  icon={Number(item.rating) < 6 ? "fas fa-star-half-alt" : "fas fa-star"}

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

import React from "react";
import { Link } from "react-router-dom";

// import data
import BannerArr from "../../../assets/fake-data/Banner";
import VideoData from "../../../assets/fake-data/Video";
import cardData from "../../../assets/fake-data/CardDetails";

// import components
import Helmet from "../../../components/Helmet/Helmet";
import TourFilter from "../../../components/tourFilter/tourFilter";
import CustomTitle from "../../../components/customTitle/customTitle";
import Selections from "../../../components/selections/selections";
import CardSelection from "../../../components/cards/cardSelection/cardSelection";
import VideoDemo from "../../../components/VideoDemo/VideoDemo";
import RowDetails from "../../../components/rowDetails/rowDetails";
import SlideCardTravel from "../../../components/Carousel/CarouselCardTravel";
import SlideCardRating from "../../../components/Carousel/CarouselCardRating";
import CarouselBanner from "../../../components/Carousel/CarouselBanner";
import Banner from "../../../components/banner/banner";

import "../../App.scss";
import "./travel.scss";
// img sub
import { Paris } from "../../../assets/img";

//get data
const getImgBanner = BannerArr.filter((e) => e.types === "banner_home_travel");
const getVideoData = VideoData.filter((e) => e.id === "video_home_travel");
// console.log(getImgBanner);

const imgArea = {
  img: Paris,
};
const content1 = {
  content: "Choose your",
  title: "Perfect holiday",
  subTitle:
    "Dare convenevole senza vostro niuna credere mentre impermutabile forse al, essilio cose tale sua novellare,.",
};
const content2 = {
  content: " Plan the",
  title: "Perfect holiday",
  subTitle: "By into murmured murmured door surely and soul at thee,.",
};

const HomeTravel = () => {
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
    <Helmet title="Home Travel Agency" className="component">
      {/* banner */}
      <CarouselBanner>
        {getImgBanner.map((item, index) => (
          <Banner
            key={index}
            img={item.img}
            title={item.title}
            subTitle={item.subTitle}
            description={item.description}
          ></Banner>
        ))}
      </CarouselBanner>

      {/* filter date, time, location */}
      <TourFilter />
      {/* sub title */}
      <CustomTitle
        content={content1.content}
        title={content1.title}
        subTitle={content1.subTitle}
      />

      {/* selection item  */}
      <Selections>
        {cardData.getCards_random(12).map((item, index) => (
          <Link
            to={"/tour-item/" + to_slug(item.title)}
            key={index}
            className="col col-xxl-3 col-lg-6 col-md-6 col-12"
          >
            <CardSelection
              img={item.img}
              title={item.title}
              rating={item.rating}
              cost={Number(item.cost)}
              icon={
                Number(item.rating) < 6 ? "fas fa-star-half-alt" : "fas fa-star"
              }
            />
          </Link>
        ))}
      </Selections>

      {/* img sub */}
      <div className="row img-side-area">
        <div className="col col-lg-12 col-md-12 col-sm-0">
          <img
            className="img"
            src={imgArea.img}
            alt="not found"
            style={{ display: "flex", margin: "40px auto" }}
          />
        </div>
      </div>

      {/* video  */}
      <div>
        {getVideoData.map((item) => (
          <VideoDemo
            key={item.id}
            poster={item.img}
            path={item.path}
            bgurl={item.bgUrl}
          />
        ))}
      </div>

      {/* row icon sub with details*/}
      <RowDetails />
      {/* selection item slide show */}
      <div className="area-slide-show-item-card">
        <CustomTitle
          content={content2.content}
          title={content2.title}
          subTitle={content2.subTitle}
        />
        <SlideCardTravel />
      </div>
      {/* rating */}
      <SlideCardRating />
    </Helmet>
  );
};

export default HomeTravel;

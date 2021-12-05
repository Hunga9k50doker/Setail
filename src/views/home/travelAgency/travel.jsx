import React from "react";

// import data
import BannerArr from "../../../assets/fake-data/Banner";
import VideoData from "../../../assets/fake-data/Video";
import card_selection_data from "../../../assets/fake-data/CardSelections";

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
        {card_selection_data.getCards(0, 12).map((item, index) => (
          <div
            key={index}
            className="col col-xxl-3 col-lg-3 col-md-6 col-sm-12"
          >
            <CardSelection
              img={item.img}
              title={item.title}
              rating={item.rating}
              cost={Number(item.cost)}
            />
          </div>
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

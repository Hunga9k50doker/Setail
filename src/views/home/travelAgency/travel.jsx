import React from "react";

import "../../App.scss";
import "./travel.scss";

import Banner from "../../../components/banner/banner";
import TourFilter from "../../../components/tourFilter/tourFilter";
import CustomTitle from "../../../components/customTitle/customTitle";
import Selections from "../../../components/selections/selections";
import VideoDemo from "../../../components/VideoDemo/VideoDemo";
import RowDetails from "../../../components/rowDetails/rowDetails";
import SlideCard from '../../../components/SlideCard/SlideCard';
import { Paris } from "../../../assets/img";

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
  subTitle:
    "By into murmured murmured door surely and soul at thee,.",
};

// const NewCustomTitles = CustomTitle(
//   )
// `${content.content},
// ${content.title},
//  ${content.subTitle}`

const HomeTravel = () => {
  return (
    <div className="component">
      <Banner />
      <TourFilter />
      <CustomTitle
        content={content1.content}
        title={content1.title}
        subTitle={content1.subTitle}
      />
      <Selections />
      <div className="row img-side-area">
        <div className="col col-lg-12 col-md-12 col-sm-0">
          <img className="" src={imgArea.img} alt="" />
        </div>
      </div>
      <VideoDemo />
      <RowDetails />
      <div className="area-slide-show-item-card">
      <CustomTitle
        content={content2.content}
        title={content2.title}
        subTitle={content2.subTitle}
      />
     <SlideCard/>
      </div>
    </div>
  );
};

export default HomeTravel;

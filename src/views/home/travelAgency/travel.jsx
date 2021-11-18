import React from "react";
import "../../App.scss";
import "./travel.scss";

import Banner from "../../../components/banner/banner";
import TourFilter from "../../../components/tourFilter/tourFilter";
import CustomTitle from "../../../components/customTitle/customTitle";
import Selections from "../../../components/selections/selections";
import VideoDemo from "../../../components/VideoDemo/VideoDemo";
import RowDetails from "../../../components/rowDetails/rowDetails";
import { Paris } from "../../../assets/img";

const imgArea = {
  img: Paris,
};
const HomeTravel = () => {
  return (
    <div className="component">
      <Banner />
      <TourFilter />
      <CustomTitle />
      <Selections />
        <div className="row img-side-area">
          <div className="col col-lg-12 col-md-12 col-sm-0">
            <img className="" src={imgArea.img} alt="" />
          </div>
      </div>
      <VideoDemo/>
      <RowDetails/>
    </div>
  );
};

export default HomeTravel;

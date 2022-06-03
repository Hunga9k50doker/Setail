import React from "react";
import { BgSydneyOpera } from "../../assets/img";
import "./banner.scss";
const Banner = (props) => {
  return (
    <div
      className="ban"
      style={{
        background: `url(${BgSydneyOpera})`,
      }}
    >
      <img srcSet={props.img} alt={props.img} />
      <div className="content">
        <h5 className="subTitle" data-aos="fade-down">
          {props.subTitle}
        </h5>
        <h2 className="title" data-aos="fade-up">
          {props.title}
        </h2>
        <p className="description" data-aos="fade-up">
          {props.description}
        </p>
      </div>
    </div>
  );
};

export default Banner;

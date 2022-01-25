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
        <h5 className="subTitle">{props.subTitle}</h5>
        <h2 className="title">{props.title}</h2>
        <p className="description">{props.description}</p>
      </div>
    </div>
  );
};

export default Banner;

// class Example extends React.Component  {
//   render() {
//     return <h1>I'm a functional component!</h1>;
//   }
// };

import React from "react";
import "./cardReview.scss";
const CardReview = (props) => {
  return (
    <div className="card__reviews" style={props.style}>
      {/* <div className="row "> */}
      <div className="col col-xxl-3 col-xl-3  col-md-3 col-sm-12">
        <img src={props.img} alt="Not Found" className="img__user" />
      </div>
      <div className="col col-xxl-9 col-xl-9 col-md-9 col-sm-12">
        <div className="card__content">
          <h3 className="card__place">{props.place}</h3>
          <p className="card__rating__start">{props.star}</p>
          <p className="card__text">{props.description}</p>
          <h5 className="card__name__user">{props.name}</h5>
          <h5 className="card__time">{props.time}</h5>
        </div>
      </div>
      {/* </div> */}
    </div>
  );
};

export default CardReview;

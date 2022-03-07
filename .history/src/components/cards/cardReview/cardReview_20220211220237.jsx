import React from "react";
import "./cardReview.scss";
const CardReview = (props) => {
  return (
    <div className="card__reviews">
      <img src={props.img} alt="Not Found" className="img__user" />
      <div className="card__content">
        <h3 className="card__place">{props.place}</h3>
        <p className="card__rating__start">{props.star}</p>
        <p className="card__text">{props.description}</p>
        <h5 className="card__name__user">{props.name}</h5>
        <h5 className="card__time">{props.time}</h5>
      </div>
    </div>
  );
};

export default CardReview;

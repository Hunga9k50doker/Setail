import React from "react";
import PropTypes from "prop-types";
import "./cardDetails.scss";

const CardDetails = (props) => {
  return (
    <div className="card">
      <div className="card-header">
      <img src={props.img} className="card-img-top" alt="..." />
        <div className="card-information">
          <p className="card-information-calendar">
            <i className="far fa-calendar-alt"></i>
            <span>{props.calendar}</span>
          </p>
          <p className="card-information-custom">
            <i className="fas fa-user"></i>
            <span>{props.custom}</span>
          </p>
          <p className="card-information-location">
            <i className="fas fa-map-marker-alt"></i>
            <span>{props.location}</span>
          </p>
        </div>
      </div>
      <div className="card-body">
        <h3 className="card-title">{props.title}</h3>
        <p className="card-text">{props.subTitle}</p>
        <div className="card-cost__rating">
          <p className="card-cost">{"$" + props.cost}</p>
          <p className="card-rating">
            <i className='fas fa-star-half-alt'></i>
            {props.rating}
          </p>
        </div>
      </div>
    </div>
  );
};

CardDetails.propTypes = {
  img: PropTypes.string.isRequired,
  calendar: PropTypes.string.isRequired,
  custom: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  subTitle: PropTypes.string.isRequired,
  cost: PropTypes.number.isRequired,
  rating: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
};
export default CardDetails;

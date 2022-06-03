import React from "react";
import PropTypes from "prop-types";
import "./cardDetails.scss";

const CardDetails = (props) => {
  return (
    <div className="card" data-aos="flip-up">
      <div className="card-header">
        <picture className="card-img">
          <source media="(min-width:1200px)" srcSet={props.img} />
          <source
            media="(min-width:768px)"
            srcSet={props.img}
            style={{ width: "328px", height: "193px" }}
          />
          <img src={props.img} className="card-img-top" alt="not found" />
        </picture>
        <h5 className="card__header__text">Special offer</h5>
      </div>
      <div className="card-body">
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
        <h3 className="card-title">{props.title}</h3>

        <div className="container__text">
          <p className="card-text">{props.subTitle}</p>
        </div>
        <div className="card-cost__rating">
          <p className="card-cost">{"$" + props.cost}</p>
          <p className="card-rating">
            <i className={props.icon}></i>
            {Number(props.rating) <= 7
              ? props.rating + " Good"
              : props.rating + " Superb"}
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
  icon: PropTypes.string.isRequired,
};
export default CardDetails;

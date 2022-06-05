import React from "react";
// import PropTypes from "prop-types";

import cardData from "../../assets/fake-data/CardDetails";

import CardDetails from "../cards/cardDetails/cardDetails";

import "./slideCard.scss";
const SlideCard = () => {
  return (
    <div className=" slides__card container ">
      <div className="row">
        <div className="col col-md-12">
          <div
            id="carouselExampleIndicators"
            className="carousel slide"
            data-bs-ride="carousel"
          >
            <div className="carousel-indicators">
              <button
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide-to="0"
                className="active"
                aria-current="true"
                aria-label="Slide 1"
              ></button>
              <button
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide-to="1"
                aria-label="Slide 2"
              ></button>
            </div>
            <div className="carousel-inner">
              {cardData.getAllCards().map((item, index) => (
                <div key={index} className="row">
                  <div className="carousel-item active">
                    <div className="col col-lg-3 col-md-4 col-12">
                      <CardDetails
                        img={item.img}
                        calendar={item.calendar}
                        custom={item.custom}
                        location={item.location}
                        title={item.title}
                        subTitle={item.subTitle}
                        cost={Number(item.cost)}
                        rating={item.rating}
                        icon={
                          Number(item.rating) < 6
                            ? "fas fa-star-half-alt"
                            : "fas fa-star"
                        }
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// SlideCard.propTypes = {};

export default SlideCard;

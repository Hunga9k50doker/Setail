import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import React from "react";
import cardData from "../../../assets/fake-data/CardDetails";
import { to_slug } from "../../../utils/utils";

import Helmet from "../../Helmet/Helmet";
const ContentItem = () => {
  let { slug } = useParams();


  return (
    <Helmet title={slug}>
      <div className="component nav__content">
        {cardData.getAllCards().map(
          (item, index) =>
            to_slug(item.title) === slug && (
              <React.Fragment key={index}>
                <div className="content__item">
                  <h2 className="item__title">
                    {item.title}
                    <p>
                      <strong> ${item.cost}</strong> / person
                    </p>
                  </h2>

                  <h3 className="item__rating">
                    {/* <i className="far fa-star"></i>
              <i className="far fa-star"></i>
              <i className="far fa-star"></i>
              <i className="far fa-star"></i> */}
                    {item.rating <= 7 ? (
                      <>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="far fa-star"></i>
                      </>
                    ) : (
                      <>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                      </>
                    )}
                    <p>(1 review)</p>
                  </h3>
                  <p className="item__subtitle">{item.subTitle}</p>
                  <div className="item__list__btn">
                    <button className="item__btn__calendar">
                      <i className="far fa-calendar"></i>1
                    </button>
                    <button className="item__btn__age">
                      <i className="fas fa-user"></i>
                      {item.age} Age
                    </button>
                    <button className="item__btn__location">
                      <i className="fas fa-map-marker-alt"></i>
                      {item.location}
                    </button>
                  </div>
                  <ul className="item__list__info">
                    <li className="item__info">
                      <h6>Destination</h6>
                      <div className="item__detail item__link">
                        <Link to="#">{item.title} Tour</Link>
                      </div>
                    </li>
                    <li className="item__info">
                      <h6>Departure</h6>
                      <div className="item__detail">
                        <h6>Main Square, Old Town</h6>
                      </div>
                    </li>
                    <li className="item__info">
                      <h6>Departure Time</h6>
                      <div className="item__detail">
                        <h6> Approximately 8.30AM</h6>
                      </div>
                    </li>
                    <li className="item__info">
                      <h6>Return Time</h6>
                      <div className="item__detail">
                        <h6> Approximately 7.30PM</h6>
                      </div>
                    </li>
                    <li className="item__info">
                      <h6>Dress Code</h6>
                      <div className="item__detail">
                        <h6>Casual, comfortable and light</h6>
                      </div>
                    </li>
                    <li className="item__info">
                      <h6>Included</h6>
                      <div className="item__detail">
                        <h6>
                          <p>
                            <i className="far fa-check-circle"></i>
                            <span>5 Star Accommodation</span>
                          </p>
                          <p>
                            <i className="far fa-check-circle"></i>
                            <span>Breakfast</span>
                          </p>
                        </h6>
                        <h6>
                          <p>
                            <i className="far fa-check-circle"></i>
                            <span>Airport Transfer</span>
                          </p>
                          <p>
                            <i className="far fa-check-circle"></i>
                            <span>Personal Guide</span>
                          </p>
                        </h6>
                      </div>
                    </li>
                    <li className="item__info">
                      <h6>Not Included</h6>
                      <div className="item__detail">
                        <h6>
                          <p>
                            <i className="fas fa-ban"></i>
                            <span>Gallery Ticket</span>
                          </p>
                        </h6>
                        <h6>
                          <p>
                            <i className="fas fa-ban"></i>
                            <span>Lunch</span>
                          </p>
                        </h6>
                      </div>
                    </li>
                  </ul>
                </div>
                <div className="content__item">
                  <h2 className="item__title">From our gallery</h2>
                  <p className="item__subtitle">
                    Elitr sed eos elitr elitr tempor. Gubergren no sit
                    sadipscing duo at justo lorem sanctus. Ipsum ea accusam
                    eirmod ut,.
                  </p>

                  <div className="row item__list__img ">
                    {item.img__grid.slice(8, 11).map((e, id) => (
                      <div key={id} className="col col-lg-4 col-md-4 col-12">
                        <div className="grid__item">
                          <img
                            className="grid__item__img"
                            style={{ width: "300px", height: "300px" }}
                            src={e}
                            alt="Not found"
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </React.Fragment>
            )
        )}
      </div>
    </Helmet>
  );
};

export default ContentItem;

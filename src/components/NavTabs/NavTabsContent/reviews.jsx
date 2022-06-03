import { useParams } from "react-router-dom";
// import { Link } from "react-router-dom";
import React from "react";

import card__data from "../../../assets/fake-data/CardUsers";
import cardData from "../../../assets/fake-data/CardDetails";
import { to_slug, RatingStarInput, RatingStar } from "../../../utils/utils";

import Helmet from "../../Helmet/Helmet";
const Reviews = () => {
  let { slug } = useParams();

  return (
    <Helmet title={slug}>
      <div className="component nav__content">
        {cardData.getAllCards().map(
          (item, index) =>
            to_slug(item.title) === slug && (
              <React.Fragment key={index}>
                <div className="review__item">
                  <h2 className="item__title">
                    Reviews Scores and Score Breakdown
                  </h2>

                  <p className="item__subtitle">
                    Dolores stet justo ipsum tempor ea sed et et. Consetetur
                    ipsum ea eirmod et. Tempor elitr dolore et diam dolor,
                    sadipscing dolore justo duo vero erat magna lorem stet sit..
                  </p>
                  <div className="review__item__detail">
                    <h2 className="review__item__score">
                      {item.rating}
                      <>
                        {item.rating < 7 ? (
                          <p>
                            <i className="fas fa-star-half-alt"></i> Good
                          </p>
                        ) : (
                          <p>
                            {" "}
                            <i className="fas fa-star"></i> Superb
                          </p>
                        )}
                      </>
                    </h2>
                    <ul className="list__progress__bar">
                      {item.review__details.map((element, id) => (
                        <li
                          key={id}
                          className={element.title + "  item__progress__bar"}
                        >
                          <h6>
                            <p>{element.title}</p>
                            <p>{element.percent}%</p>
                          </h6>
                          <div className="item__pb">
                            <p
                              style={{ width: `${element.percent}%` }}
                              className="item__pb__percent"
                            >
                              ''
                            </p>
                          </div>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="user__reviews">
                    {card__data.getCards_random(1).map((e, id) => (
                      <React.Fragment key={id}>
                        <div className="user__img">
                          <img src={e.img} alt="Can't Get" />
                        </div>
                        <div className="user__reviews__info">
                          <h6>{e.name}</h6>
                          <p>{e.rating}</p>
                          <div className="user__rating">
                            <div className="row">
                              <div className="col col-xl-4 col-lg-4 col-md-6 col-12">
                                <>
                                  {item.review__details.map(
                                    (element, k) =>
                                      element.title === "Rating" && (
                                        <h6
                                          key={k}
                                          className="user__rating__title"
                                        >
                                          <p>{element.title}</p>
                                          <RatingStar
                                            rating={element.percent / 20}
                                          />
                                        </h6>
                                      )
                                  )}
                                  {item.review__details.map(
                                    (element, k) =>
                                      element.title === "Hospitality" && (
                                        <h6
                                          key={k}
                                          className="user__rating__title"
                                        >
                                          <p>{element.title} </p>
                                          <RatingStar
                                            rating={element.percent / 20}
                                          />
                                        </h6>
                                      )
                                  )}
                                </>
                              </div>
                              <div className="col col-xl-4 col-lg-4 col-md-6 col-12">
                                <>
                                  {item.review__details.map(
                                    (element, k) =>
                                      element.title === "Comfort" && (
                                        <h6
                                          key={k}
                                          className="user__rating__title"
                                        >
                                          <p>{element.title} </p>
                                          <RatingStar
                                            rating={element.percent / 20}
                                          />
                                        </h6>
                                      )
                                  )}
                                  {item.review__details.map(
                                    (element, k) =>
                                      element.title === "Hygiene" && (
                                        <h6
                                          key={k}
                                          className="user__rating__title"
                                        >
                                          <p>{element.title} </p>
                                          <RatingStar
                                            rating={element.percent / 20}
                                          />
                                        </h6>
                                      )
                                  )}
                                </>
                              </div>
                              <div className="col col-xl-4 col-lg-4 col-md-6 col-12">
                                <>
                                  {item.review__details.map(
                                    (element, k) =>
                                      element.title === "Food" && (
                                        <h6
                                          key={k}
                                          className="user__rating__title"
                                        >
                                          <p>{element.title} </p>
                                          <RatingStar
                                            rating={element.percent / 20}
                                          />
                                        </h6>
                                      )
                                  )}
                                  {item.review__details.map(
                                    (element, k) =>
                                      element.title === "Reception" && (
                                        <h6
                                          key={k}
                                          className="user__rating__title"
                                        >
                                          <p>{element.title} </p>
                                          <RatingStar
                                            rating={element.percent / 20}
                                          />
                                        </h6>
                                      )
                                  )}
                                </>
                              </div>
                            </div>
                          </div>
                          <p className="time__reviews">
                            October 10, 2018 at 9:09 am
                          </p>
                        </div>
                      </React.Fragment>
                    ))}
                  </div>
                  <form
                    className="row g-3 needs-validation post__comment"
                    noValidate
                  >
                    <h3 className="form__title">Post a Comment</h3>
                    <div className="user__rating">
                      <div className="row">
                        <div className="col col-xl-4 col-lg-4 col-md-6 col-12">
                          <>
                            {item.review__details.map(
                              (element, k) =>
                                element.title === "Rating" && (
                                  <h6 key={k} className="user__rating__title">
                                    <p>
                                      <p>{element.title}</p>
                                    </p>
                                    <RatingStarInput />
                                  </h6>
                                )
                            )}
                            {item.review__details.map(
                              (element, k) =>
                                element.title === "Hospitality" && (
                                  <h6 key={k} className="user__rating__title">
                                    <p>
                                      <p>{element.title}</p>
                                    </p>
                                    <RatingStarInput />
                                  </h6>
                                )
                            )}
                          </>
                        </div>
                        <div className="col col-xl-4 col-lg-4 col-md-6 col-12">
                          <>
                            {item.review__details.map(
                              (element, k) =>
                                element.title === "Comfort" && (
                                  <h6 key={k} className="user__rating__title">
                                    <p>
                                      <p>{element.title}</p>
                                    </p>
                                    <RatingStarInput />
                                  </h6>
                                )
                            )}
                            {item.review__details.map(
                              (element, k) =>
                                element.title === "Hygiene" && (
                                  <h6 key={k} className="user__rating__title">
                                    <p>
                                      <p>{element.title}</p>
                                    </p>
                                    <RatingStarInput />
                                  </h6>
                                )
                            )}
                          </>
                        </div>
                        <div className="col col-xl-4 col-lg-4 col-md-6 col-12">
                          <>
                            {item.review__details.map(
                              (element, k) =>
                                element.title === "Food" && (
                                  <h6 key={k} className="user__rating__title">
                                    <p>
                                      <p>{element.title}</p>
                                    </p>
                                    <RatingStarInput />
                                  </h6>
                                )
                            )}
                            {item.review__details.map(
                              (element, k) =>
                                element.title === "Reception" && (
                                  <h6 key={k} className="user__rating__title">
                                    <p>
                                      <p>{element.title}</p>
                                    </p>
                                    <RatingStarInput />
                                  </h6>
                                )
                            )}
                          </>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-12">
                      <div className="input-group has-validation">
                        <span
                          className="input-group-text"
                          id="inputGroupPrepend"
                        >
                          <i className="far fa-comments"></i>
                        </span>
                        <textarea
                          type="text"
                          className="form-control"
                          id="validationCustom03"
                          placeholder="Comment"
                          rows="10"
                        ></textarea>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="input-group has-validation">
                        <span
                          className="input-group-text"
                          id="inputGroupPrepend"
                        >
                          <i className="fas fa-user"></i>
                        </span>
                        <input
                          type="text"
                          className="form-control"
                          id="validationCustom02"
                          placeholder="Name*"
                          required
                        />
                      </div>
                      <div className="valid-feedback">Looks good!</div>
                    </div>
                    <div className="col-md-6">
                      <div className="input-group has-validation">
                        <span
                          className="input-group-text"
                          id="inputGroupPrepend"
                        >
                          <i className="far fa-envelope"></i>
                        </span>
                        <input
                          type="text"
                          className="form-control"
                          id="validationCustomUsername"
                          aria-describedby="inputGroupPrepend"
                          placeholder="Email*"
                          required
                        />
                        <div className="invalid-feedback">
                          Please choose a Email.
                        </div>
                      </div>
                    </div>

                    <div className="col-12">
                      <div className="form-check">
                        <input
                          type="checkbox"
                          value=""
                          id="invalidCheck"
                          required
                        />
                        <label
                          className="form-check-label"
                          htmlFor="invalidCheck"
                        >
                          Save my name, email, and website in this browser for
                          the next time I comment.
                        </label>
                        <div className="invalid-feedback">
                          You must agree before submitting.
                        </div>
                      </div>
                    </div>
                    <div className="col-12">
                      <button className="btn btn-primary" type="submit">
                        Submit
                      </button>
                    </div>
                  </form>
                </div>
              </React.Fragment>
            )
        )}
      </div>
    </Helmet>
  );
};

export default Reviews;

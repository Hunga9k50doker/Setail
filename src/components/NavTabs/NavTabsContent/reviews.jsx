import { useParams } from "react-router-dom";
// import { Link } from "react-router-dom";
import React from "react";

import card__data from "../../../assets/fake-data/CardUsers";
import cardData from "../../../assets/fake-data/CardDetails";

import Helmet from "../../Helmet/Helmet";
const Reviews = () => {
  let { slug } = useParams();
  function to_slug(str) {
    // Chuyển hết sang chữ thường
    str = str.toLowerCase();

    // xóa dấu
    str = str.replace(/(à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ)/g, "a");
    str = str.replace(/(è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ)/g, "e");
    str = str.replace(/(ì|í|ị|ỉ|ĩ)/g, "i");
    str = str.replace(/(ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ)/g, "o");
    str = str.replace(/(ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ)/g, "u");
    str = str.replace(/(ỳ|ý|ỵ|ỷ|ỹ)/g, "y");
    str = str.replace(/(đ)/g, "d");

    // Xóa ký tự đặc biệt
    str = str.replace(/([^0-9a-z-\s])/g, "");

    // Xóa khoảng trắng thay bằng ký tự -
    str = str.replace(/(\s+)/g, "-");

    // xóa phần dự - ở đầu
    str = str.replace(/^-+/g, "");

    // xóa phần dư - ở cuối
    str = str.replace(/-+$/g, "");

    // return
    return str;
  }

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

                      {item.rating < 7 ? (
                        <>
                          <i class="far fa-star"></i> Good
                        </>
                      ) : (
                        <>
                          {" "}
                          <i class="fas fa-star"></i> Superb
                        </>
                      )}
                    </h2>
                    <ul className="list__progress__bar">
                      {item.review__details.map((element, id) => (
                        <li key={id} className="item__progress__bar">
                          <h6>
                            <p>{element.title}</p>
                            <p>{element.percent}%</p>
                          </h6>
                          <div className="item__pb">
                            <div className="item__pb__percent"></div>
                          </div>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="user__reviews">
                    {card__data.getCards_random(1).map((e, id) => (
                      <>
                        <img
                          src={e.img}
                          alt="Can't Get"
                          className="user__img"
                        />
                        <div key={id} className="user__reviews__info">
                          <h6>{e.name}</h6>
                          <p>{e.rating}</p>
                          <div className="user__rating">
                            <div className="col">
                              <>
                                {item.review__details.map(
                                  (element, k) =>
                                    element.title === "Rating" && (
                                      <h6 className="user__rating__title">
                                        {element.title} {element.percent}
                                      </h6>
                                    )
                                )}
                                {item.review__details.map(
                                  (element, k) =>
                                    element.title === "Hospitality" && (
                                      <h6 className="user__rating__title">
                                        {element.title} {element.percent}
                                      </h6>
                                    )
                                )}
                              </>
                            </div>
                            <div className="col">
                              <>
                                {item.review__details.map(
                                  (element, k) =>
                                    element.title === "Comfort" && (
                                      <h6 className="user__rating__title">
                                        {element.title} {element.percent}
                                      </h6>
                                    )
                                )}
                                {item.review__details.map(
                                  (element, k) =>
                                    element.title === "Hygiene" && (
                                      <h6 className="user__rating__title">
                                        {element.title} {element.percent}
                                      </h6>
                                    )
                                )}
                              </>
                            </div>
                            <div className="col">
                              <>
                                {item.review__details.map(
                                  (element, k) =>
                                    element.title === "Food" && (
                                      <h6 className="user__rating__title">
                                        {element.title} {element.percent}
                                      </h6>
                                    )
                                )}
                                {item.review__details.map(
                                  (element, k) =>
                                    element.title === "Reception" && (
                                      <h6 className="user__rating__title">
                                        {element.title} {element.percent}
                                      </h6>
                                    )
                                )}
                              </>
                            </div>
                          </div>
                        </div>
                      </>
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

export default Reviews;

import React from "react";
import "../../App.scss";
import "./tourList.scss";
import { Link } from "react-router-dom";
import cardData from "../../../assets/fake-data/CardDetails";
import CardDetails from "../../../components/cards/cardDetails/cardDetails";
import { Baner1, banData } from "../../../components/blogItem/BlogItem";
import Helmet from "../../../components/Helmet/Helmet";
import {
  featureTourData,
  FeatureTour,
  TourGalleryItem,
  TourMasonryItem,
} from "../../../components/cards/cardTourList/cardTourList";
import { to_slug } from "../../../utils/utils";

const $ = cardData.getAllCards();

const TourList = () => {
  return (
    <Helmet title="Tour List">
      <div className="tour-list grip ">
        <Baner1 banData={banData[2]} />
        <div className="container-fluid">
          {" "}
          <section className="tour-card-list row grey py-5">
            {[$[10], $[9], $[8]].map((item, index) => (
              <Link
                to={"/tour-item/" + to_slug(item.title)}
                key={index}
                className="col col-xxl-3 col-lg-6 col-md-12 col-sm-12"
              >
                <CardDetails
                  key={index}
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
              </Link>
            ))}
          </section>
        </div>
        <div className="container">
          {" "}
          <section className="destination-tour row py-5">
            {featureTourData.row1.map((item, index) => (
              <Link className="item" key={index} to="/">
                <FeatureTour data={item} />
              </Link>
            ))}
          </section>
        </div>
        <div className="container-fluid">
          {" "}
          <section className="tour-gallery row grey py-5">
            {featureTourData.row2.map((item, index) => (
              <Link className="item" key={index} to="/">
                <TourGalleryItem data={item} />
              </Link>
            ))}
          </section>
        </div>
        <div className="container">
          {" "}
          <section className="tour-masonry row py-5">
            <div className="container">
              {featureTourData.row3.map((item, index) => (
                <Link
                  className={`grid-item grid-item-${index}`}
                  key={index}
                  to="/"
                >
                  <TourMasonryItem data={item} />
                </Link>
              ))}
            </div>
          </section>
        </div>
      </div>
    </Helmet>
  );
};

export default TourList;

import React from "react";
import "../../App.scss";
import "./tourList.scss";
import { Link } from "react-router-dom";
import cardData from "../../../assets/fake-data/CardDetails";
import CardDetails from "../../../components/cards/cardDetails/cardDetails";
import { Baner1, banData } from "../../../components/blogItem/BlogItem";
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
    <div className="tour-list grid">
      <Baner1 banData={banData[2]} />
      <section className="tour-card-list row grey">
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
                Number(item.rating) < 6 ? "fas fa-star-half-alt" : "fas fa-star"
              }
            />
          </Link>
        ))}
      </section>
      <section className="destination-tour row ">
        {featureTourData.row1.map((item, index) => (
          <Link className="col col-xxl-3" key={index} to="/">
            <FeatureTour data={item} />
          </Link>
        ))}
      </section>
      <section className="tour-gallery row grey">
        {featureTourData.row2.map((item, index) => (
          <Link className="col col-xxl-3" key={index} to="/">
            <TourGalleryItem data={item} />
          </Link>
        ))}
      </section>
      <section className="tour-masonry row">
        {featureTourData.row3.map((item, index) => (
          <Link className={`grid-item-${index}`} key={index} to="/">
            <TourMasonryItem data={item} />
          </Link>
        ))}
      </section>
    </div>
  );
};

export default TourList;

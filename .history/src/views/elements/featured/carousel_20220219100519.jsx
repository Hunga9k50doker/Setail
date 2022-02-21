import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import cardData from "../../../assets/fake-data/CardDetails";
import CardDetails from "../../../components/cards/cardDetails/cardDetails";
import { Baner1, banData } from "../../../components/blogItem/BlogItem";
import Helmet from "../../../components/Helmet/Helmet";
import SlideCardTravel from "../../../components/Carousel/CarouselCardTravel";
import { to_slug } from "../../../utils/utils";
import "../../App.scss";
import "./tourList.scss";
const $ = cardData.getAllCards();

const Carousel = () => {
  return (
    <Helmet title="Tour Carousel">
      <div className="tour-list grid">
        <Baner1 banData={banData[3]} />
        <div className="container-fluid ">
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
        <div className="container-fluid">
          {" "}
          <section className="destination-tour row py-5">
            <SlideCardTravel>
              {cardData.getCards_random(12).map((item, index) => (
                <Link key={index} to={"/tour-item/" + to_slug(item.title)}>
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
                </Link>
              ))}
            </SlideCardTravel>
          </section>
        </div>
      </div>
    </Helmet>
  );
};

export default Carousel;

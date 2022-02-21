import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
// import data
import BannerArr from "../../../assets/fake-data/Banner";
import cardData from "../../../assets/fake-data/CardDetails";
// import components
import Helmet from "../../../components/Helmet/Helmet";
import CustomTitle from "../../../components/customTitle/customTitle";
import TourFilter from "../../../components/tourFilter/tourFilter";

import CarouselBanner from "../../../components/Carousel/CarouselBanner";
import CarouselReviews from "../../../components/Carousel/CarouselReviews";
import SlideStamp from "../../../components/Carousel/CarouselPostMark";

import CardSelection from "../../../components/cards/cardSelection/cardSelection";
import Selections from "../../../components/selections/selections";
import { to_slug } from "../../../utils/utils";
import SlideCardRating from "../../../components/Carousel/CarouselCardRating";
import Sub from "../../../components/Subscribe/sub";
import Banner from "../../../components/banner/banner";
import "../../App.scss";
import "./exotic.scss";

//get data
const getImgBanner = BannerArr.filter(
  (e) => e.types === "banner_exotic_travel"
);

const NewStyleSlick = styled.div`
  .slide__card-slick .slick-list {
    height: fit-content !important;
  }
`;

const NewStyleItem = styled.div`
  .selections__item {
    border-radius: 50%;
    width: 350px;
    height: 350px;
    margin: 30px;
    &:before {
      display: block;
    }
  }
  h3 {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-size: 3rem;
    z-index: 4;
    font-family: "Pacifico", sans-serif;
    font-weight: 400;
    font-style: italic;
  }
  h5,
  p,
  i,
  .selections__rating {
    display: none;
  }
`;
const NewStyleSelection = styled.div`
  .selections {
    padding-top: 0;
    margin-top: 80px;
    transform: translateY(-150px);
  }
`;
const NewStyleReview = styled.div`
  .slide__card__review {
    color: #000;
  }
`;

export const NewStyleTourFilter = styled.div`
  .tour__filter {
    position: relative;

    &-list {
      position: absolute;
      left: 160px;
      display: flex;
      transform: translateY(calc(-100% - 160px));
      align-items: center;
      justify-content: center;
      flex-direction: column;
      max-width: 320px;
      color: #fff;
    }
    &-item,
    input,
    select {
      width: 100%;
      color: #fff;
      background: #3fd0d4;
    }
    &-item {
      padding: 4px 20px;
      border-top: 1px solid #fff;
      border-bottom: 1px solid #fff;

      &:last-child {
        background: #fff;
        input {
          color: #000;
          background: #fff;
        }
        &:hover {
          background: #3abdc1;
          input {
            color: #fff;
            background: #3abdc1;
          }
        }
      }
    }
    input::placeholder,
    i {
      color: #fff;
    }
  }
`;
const HomeExotic = () => {
   
  return (
    <Helmet title="Home Exotic Holiday" className="component exotic">
      {/* banner */}
      <NewStyleSlick>
        <CarouselBanner>
          {getImgBanner.map((item, index) => (
            <Banner
              key={index}
              img={item.img}
              title={item.title}
              subTitle={item.subTitle}
              description={item.description}
            ></Banner>
          ))}
        </CarouselBanner>
        {/* filter date, time, location */}
        <NewStyleTourFilter>
          <TourFilter>
            <li className="tour__filter-item tour__filter-title">
              <h3 className="tour__filter-item-title">Exporler and Travvel</h3>
              <p className="tour__filter-item-title">
                Discover the world today. Find your perfect far destinations
              </p>
            </li>
          </TourFilter>
        </NewStyleTourFilter>
      </NewStyleSlick>
      {/* sub title */}
      <CustomTitle
        content="Choose your"
        title="Destinations"
        subTitle="Amet eos sanctus eirmod sit invidunt erat ipsum sea dolor lorem, ea justo amet et ipsum amet ipsum, aliquyam ipsum."
      />

      {/* selection item  */}
      <NewStyleSelection>
        <Selections>
          {cardData
            .getAllCards()
            .filter(
              (e) =>
                e.title !== "Slovenia" &&
                e.title !== "France" &&
                e.title !== "Switgerland"
            )
            .slice(0, 3)
            .map((item, index) => (
              <div
                key={index}
                className="col col-xxl-4 col-lg-6 col-md-6 col-12"
              >
                <NewStyleItem>
                  <Link to={"/tour-item/" + to_slug(item.title)}>
                    <CardSelection
                      img={item.img}
                      title={item.title}
                      rating={item.rating}
                      cost={Number(item.cost)}
                      // icon={Number(item.rating) < 6 ?"fas fa-star-half-alt" : "fas fa-star"}
                    />
                  </Link>
                </NewStyleItem>
              </div>
            ))}
        </Selections>

        <Selections>
          {cardData.getCards_random(6).map((item, index) => (
            <Link
              to={"/tour-item/" + to_slug(item.title)}
              key={index}
              className="col col-xxl-4 col-lg-4 col-md-6 col-12"
            >
              <CardSelection
                img={item.img}
                title={item.title}
                rating={item.rating}
                cost={Number(item.cost)}
                icon={
                  Number(item.rating) < 6
                    ? "fas fa-star-half-alt"
                    : "fas fa-star"
                }
              />
            </Link>
          ))}
        </Selections>
      </NewStyleSelection>
      {/* rating */}
      <SlideCardRating />
      {/* slide postmark */}
      <SlideStamp />
      {/* Reviews */}
      <NewStyleReview>
        <CarouselReviews />
      </NewStyleReview>
      <Sub />
    </Helmet>
  );
};

export default HomeExotic;

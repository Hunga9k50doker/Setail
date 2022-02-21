import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
// import data
import BannerArr from "../../../assets/fake-data/Banner";
import cardData from "../../../assets/fake-data/CardDetails";
import { BgOffer2 } from "../../../assets/img";
// import components
import Helmet from "../../../components/Helmet/Helmet";
import CustomTitle from "../../../components/customTitle/customTitle";

import RowDetails from "../../../components/rowDetails/rowDetails";
import SlideCardTravel from "../../../components/Carousel/CarouselCardTravel";
import CarouselBanner from "../../../components/Carousel/CarouselBanner";
import CardSelection from "../../../components/cards/cardSelection/cardSelection";
import Selections from "../../../components/selections/selections";
import { to_slug, parallaxBackground } from "../../../utils/utils";
import CardDetails from "../../../components/cards/cardDetails/cardDetails";
import Sub from "../../../components/Subscribe/sub";
import Banner from "../../../components/banner/banner";
import "../../App.scss";
import "./offer.scss";

//get data
const getImgBanner = BannerArr.filter((e) => e.types === "banner_pages");

const NewStyleSlick = styled.div`
  .slide__card-slick .slick-list {
    height: fit-content !important;
  }
`;

const NewStyleCustomTitle = styled.div`
  .customTitle {
    margin-top: 0;
  }
  p {
    max-width: 600px;
    text-align: center;
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

const NewStyleCustomDetails = styled.div`
  .row__details {
    margin: 100px auto;
  }
`;

const WhatWeOffer = () => {
  const ref = React.useRef();
  ref.current ? parallaxBackground(ref.current) : "";
  return (
    <Helmet title="What We Offer" className="component">
      {/* banner */}
      <NewStyleSlick>
        <CarouselBanner>
          {getImgBanner.map(
            (item, index) =>
              index === 1 && (
                <Banner
                  key={index}
                  img={item.img}
                  title={item.title}
                  subTitle={item.subTitle}
                  description={item.description}
                ></Banner>
              )
          )}
        </CarouselBanner>
      </NewStyleSlick>
      <NewStyleCustomDetails>
        <RowDetails />
      </NewStyleCustomDetails>
      <div className="offer__subscribe" ref={ref}>
        <div className="offer__subscribe__item">
          <form action="" className=" footer__form">
            <h3 className=" footer__title">Newsletter</h3>
            <h5 className=" footer__content  footer__text">
              Etiam rhoncus. Maecenas temp us, tellus eget condimentum rho
            </h5>
            <div className=" footer__form-name">
              <i className="fas fa-user"></i>
              <input
                maxLength="50"
                type="text"
                placeholder="Name"
                name=""
                id=""
              />
            </div>
            <div className=" footer__form-email">
              <i className="far fa-envelope"></i>
              <input
                maxLength="50"
                type="email"
                placeholder="Email"
                name=""
                id=""
              />
            </div>
            <button className=" footer__form-submit">Subscribe</button>
          </form>
        </div>
        <div className="offer__subscribe__item">
          <img
            className="offer__subscribe__img"
            src={BgOffer2}
            alt="Not found"
          ></img>
          <p>50% Off Adventure on Sale</p>
        </div>
      </div>

      <SlideCardTravel>
        {cardData
          .getAllCards()
          .filter((c) => c.type === "winter")
          .map((item, index) => (
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
      <NewStyleCustomTitle>
        <CustomTitle
          content="Choose Your"
          title="Destinations"
          subTitle="At magna aliquyam justo takimata ipsum. Gubergren lorem dolore amet ea duo diam magna dolore dolor. Erat gubergren voluptua tempor."
        />
      </NewStyleCustomTitle>
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
      </NewStyleSelection>
      <Sub />
    </Helmet>
  );
};

export default WhatWeOffer;

import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
// import data
import BannerArr from "../../../assets/fake-data/Banner";
import cardData from "../../../assets/fake-data/CardDetails";

// import components
import Helmet from "../../../components/Helmet/Helmet";
import Banner from "../../../components/banner/banner";
import Selections from "../../../components/selections/selections";
import CardSelection from "../../../components/cards/cardSelection/cardSelection";
import Sub from "../../../components/Subscribe/sub";
import { to_slug } from "../../../utils/utils";

import "../../App.scss";
import "./list.scss";

const getImgBanner = BannerArr.filter((e) => e.types === "banner_destinations");
const NewStyleSelection = styled.div`
  .selections {
    padding: 50px 0;
    background: #fff;

    transform: translateY(-100px);
    box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.1), -2px 2px 4px rgba(0, 0, 0, 0.1);
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
const List = () => {
  return (
    <Helmet title="Destination List">
      <div className="component destination__list">
        {getImgBanner.map((item, index) => (
          <Banner
            key={index}
            img={item.img}
            title={item.title}
            subTitle={item.subTitle}
            description={item.description}
          ></Banner>
        ))}
        {/* selection item  */}
        <NewStyleSelection>
          <Selections>
            {cardData.getCards_random(12).map((item, index) => (
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
      </div>
    </Helmet>
  );
};

export default List;

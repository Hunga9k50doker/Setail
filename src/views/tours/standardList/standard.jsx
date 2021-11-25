import React from "react";
import styled from "styled-components";
import "../../App.scss";
// import data
import BannerArr from "../../../assets/fake-data/Banner";
import cardData from "../../../assets/fake-data/CardDetails";

// import components
import Helmet from "../../../components/Helmet/Helmet";
import Banner from "../../../components/banner/banner";
import NavInfo from "../../../components/NavTabs/NavInfo";
import sidebar_search from "../../../components/sidebars/sidebar_search";
import CustomTitle from "../../../components/customTitle/customTitle";
import Selections from "../../../components/selections/selections";
import CardSelection from "../../../components/cards/cardSelection/cardSelection";
import CardDetails from "../../../components/cards/cardDetails/cardDetails";

import SlideCardTravel from "../../../components/Carousel/CarouselCardTravel";

const getImgBanner = BannerArr.filter((e) => e.types === "banner_tours");
const NewStyleSelection = styled.div`
  .selections {
    padding: 50px 0;
    background: #fff;
    transform: translateY(-150px);
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
    transform: translate(-50%, 0);
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
const Standard = () => {
  return (
    <Helmet title="Tours Search Page" className="component">
      {getImgBanner.map((item, index) => (
        <Banner
          key={index}
          img={item.img}
          title={item.title}
          subTitle={item.subTitle}
          description={item.description}
        ></Banner>
      ))}

      <NewStyleSelection>
        <Selections>
          <div
            className="
          "
          >
            {/* <NavInfo/>  */}
          </div>
          <div className="col col-xxl-9 col-lg-9 col-md-12 col-sm-12">
            <div className="row">
              {/* get cards */}

              {cardData.getCards(0, 12).map((item, index) => (
                <div
                  key={index}
                  className="col col-xxl-6 col-lg-6 col-md-12 col-sm-12"
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
                    icon={item.icon}
                  />
                </div>
              ))}
              {/* sidebar */}
              <div className="col col-xxl-3 col-lg-3 col-md-12 col-sm-12">
                <sidebar_search />
              </div>
            </div>
          </div>
        </Selections>
      </NewStyleSelection>
    </Helmet>
  );
};

export default Standard;

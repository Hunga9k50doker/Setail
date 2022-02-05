import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import "../../App.scss";
import "./about.scss";
// import data
import BannerArr from "../../../assets/fake-data/Banner";
import ContentData from "../../../assets/fake-data/Content";
import getVideoData from "../../../assets/fake-data/Video";
import cardData from "../../../assets/fake-data/CardDetails";
import CardSelection from "../../../components/cards/cardSelection/cardSelection";
// import components
import Helmet from "../../../components/Helmet/Helmet";
import Banner from "../../../components/banner/banner";
import CustomContent from "../../../components/CustomContent/CustomContent";
import VideoDemo from "../../../components/VideoDemo/VideoDemo";
import Selections from "../../../components/selections/selections";
import SlideCardRating from "../../../components/Carousel/CarouselCardRating";
import Sub from "../../../components/Subscribe/sub";
import { to_slug } from "../../../utils/utils";

//get data
const getImgBanner = BannerArr.filter((e) => e.types === "banner_pages");
const getContent1 = ContentData.filter((e) => e.id === "content_about_us_01");
const getContent2 = ContentData.filter((e) => e.id === "content_about_us_02");
const getVideo = getVideoData.filter((e) => e.id === "video_about_us");

const NewStyleVideo = styled.div`
  .responsive-video-poster {
    position: realative;
    bottom: 0;
    left: 50%;
    transform: translate(-50%, 0);
    width: 100vw;
    height: 500px;
    overflow: hidden;
    margin-bottom: 40px;
  }
`;

const NewStyleCard = styled.div`
  .selections__item {
    width: 100% !important;
    img {
    }
  }
`;

const AboutUs = () => {
  return (
    <Helmet title="About Us">
      <div className="component about__us">
        {/* banner */}
        {getImgBanner.map(
          (item, index) =>
            index === 0 && (
              <Banner
                key={index}
                bgUrl={item.bgUrl}
                img={item.img}
                title={item.title}
                subTitle={item.subTitle}
                description={item.description}
              ></Banner>
            )
        )}
        {/* sub content */}
        {getContent1.map((item, index) => (
          <CustomContent
            key={index}
            img={item.img}
            title={item.title}
            subTitle={item.subTitle}
            description={item.description}
          ></CustomContent>
        ))}

        {/* video */}
        <NewStyleVideo>
          {getVideo.map((item) => (
            <VideoDemo
              key={item.id}
              poster={item.img}
              path={item.path}
              bgurl={item.bgUrl}
            />
          ))}
        </NewStyleVideo>
        {/* sub content */}

        {getContent2.map((item, index) => (
          <div key={index} className="grip container">
            <div className="content ">
              <div className="row">
                <div
                  className="col col-xl-6 col-lg-12 col-md-12 col-12"
                  style={{ textAlign: "center" }}
                >
                  <img
                    src={item.img}
                    alt="not found"
                    className="content__img"
                  />
                </div>
                <div className="col col-xl-6 col-lg-12 col-md-12 col-12">
                  <h2 style={{ marginLeft: "0" }} className="content__title">
                    {item.title}
                  </h2>
                  <h3 style={{ marginLeft: "0" }} className="content__subTitle">
                    {item.subTitle}
                  </h3>
                  <ul className="progress__list">
                    <li className="progress__item">
                      <h3 className="progress__title">Countryside</h3>
                      <div className="progress__bar">
                        <div className="progress__fill"></div>
                        <p className="progress__percent">76%</p>
                      </div>
                    </li>
                    <li className="progress__item">
                      <h3 className="progress__title">Vineyard</h3>
                      <div className="progress__bar">
                        <div className="progress__fill"></div>
                        <p className="progress__percent">82%</p>
                      </div>
                    </li>
                    <li className="progress__item">
                      <h3 className="progress__title">Wine Tasting</h3>
                      <div className="progress__bar">
                        <div className="progress__fill"></div>
                        <p className="progress__percent">96%</p>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        ))}
        {/* selection item */}
        <Selections>
          {cardData.getCards_random(12).map((item, index) => (
            <Link
              to={"/tour-item/" + to_slug(item.title)}
              key={index}
              className="col col-xxl-3 col-lg-4 col-md-6 col-12 about__us__card__item"
            >
              <NewStyleCard>
                <CardSelection
                  img={item.img}
                  title={item.title}
                  rating={item.rating}
                  cost={item.cost}
                  icon={
                    Number(item.rating) < 6
                      ? "fas fa-star-half-alt"
                      : "fas fa-star"
                  }
                />
              </NewStyleCard>
              {/* </Link> */}
            </Link>
          ))}
        </Selections>
        {/* rating */}
        <SlideCardRating />
        <Sub />
      </div>
    </Helmet>
  );
};

export default AboutUs;

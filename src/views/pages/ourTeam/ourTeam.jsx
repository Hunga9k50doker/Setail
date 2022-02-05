import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
// import data
import BannerArr from "../../../assets/fake-data/Banner";
import { teamData } from "../../../assets/fake-data/CardTeams";
import ContentData from "../../../assets/fake-data/Content";

// import components
import Helmet from "../../../components/Helmet/Helmet";
import CustomTitle from "../../../components/customTitle/customTitle";
import CustomContent from "../../../components/CustomContent/CustomContent";

import CarouselBanner from "../../../components/Carousel/CarouselBanner";
import Sub from "../../../components/Subscribe/sub";
import { TeamHolderItem } from "../../../components/cards/cardTeam/cardTeam";
import Banner from "../../../components/banner/banner";
import "../../App.scss";
import "./ourTeam.scss";

//get data
const getImgBanner = BannerArr.filter((e) => e.types === "banner_pages");
const getContent1 = ContentData.filter((e) => e.id === "content_our_team_01");

const NewStyleSlick = styled.div`
  .slide__card-slick .slick-list {
    height: fit-content !important;
  }
`;

const NewStyleCustomTitle = styled.div`
  .customTitle {
    margin-top: 100px;
  }
  p {
    max-width: 600px;
    text-align: center;
  }
`;

const NewStyleCustomContent = styled.div`
  .content__custom {
    margin-bottom: 100px;
  }
`;

const OurTeam = () => {
  return (
    <Helmet title="Our Team" className="component">
      {/* banner */}
      <NewStyleSlick>
        <CarouselBanner>
          {getImgBanner.map(
            (item, index) =>
              index === 2 && (
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

      <NewStyleCustomTitle>
        <CustomTitle
          content="The Best"
          title="Travel Experts"
          subTitle="Et invidunt dolor labore tempor et amet, ut no eirmod consetetur et ipsum erat invidunt, dolor amet amet nonumy justo."
        />
      </NewStyleCustomTitle>

      {/* team selection */}
      <section className="team-holder row row__team">
        {teamData
          .filter((e) => !!e.content)
          .slice(0, 4)
          .map((item, index) => (
            <div className="item">
              <TeamHolderItem data={item} key={index} />
            </div>
          ))}
      </section>
      {/* sub content */}
      <NewStyleCustomContent>
        {getContent1.map((item, index) => (
          <CustomContent
            key={index}
            img={item.img}
            title={item.title}
            subTitle={item.subTitle}
            description={item.description}
          ></CustomContent>
        ))}
      </NewStyleCustomContent>
      <Sub />
    </Helmet>
  );
};

export default OurTeam;

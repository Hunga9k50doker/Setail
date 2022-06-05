import React from "react";
import styled from "styled-components";
import { useParams } from "react-router-dom";

import cardData from "../../assets/fake-data/CardDetails";

// import components
import Helmet from "../Helmet/Helmet";
import Banner from "../../components/banner/banner";
import Selections from "../../components/selections/selections";
import { BgSydneyOpera } from "../../assets/img";

import NavTabInfo from "../NavTabs/NavInfo";
import Sub from "../Subscribe/sub";
import { to_slug } from "../../utils/utils";

const NewStyleSelection = styled.div`
  .selections {
    padding: 50px 0;
    background: #fff;
    transform: translateY(-70px);
    padding-left: 30px;
    padding-right: 30px;
    padding-top: 0;
    box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.1), -2px 2px 4px rgba(0, 0, 0, 0.1);
  }
`;

const ItemDetail = () => {
  let { slug } = useParams();

  return (
    <Helmet title={slug}>
      <div className="component">
        {cardData.getAllCards().map(
          (item, index) =>
            to_slug(item.title) === slug && (
              <Banner
                // bgUrl={require("../../assets/img/banner_img/bgOurteamIteam.jpg").default}
                key={index}
                img={BgSydneyOpera}
                title={item.title}
                subTitle="Amazing Tour"
                description={item.description}
              ></Banner>
            )
        )}

        <NewStyleSelection>
          <Selections>
            <div className="row ">
              <NavTabInfo />
            </div>
          </Selections>
        </NewStyleSelection>
      </div>
      <Sub />
    </Helmet>
  );
};

export default ItemDetail;

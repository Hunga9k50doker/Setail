import React from "react";
import styled from "styled-components";
import "../../App.scss";
// import data
import BannerArr from "../../../assets/fake-data/Banner";

// import components
import Helmet from "../../../components/Helmet/Helmet";
import Banner from "../../../components/banner/banner";
import Selections from "../../../components/selections/selections";
import NavTabFilter from "../../../components/NavTabs/NavFilter";

const getImgBanner = BannerArr.filter((e) => e.types === "banner_tours");
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

const Standard = () => {
  return (
    <Helmet title="Tours Search Page">
      <div className="component">
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
            <div className="row ">
              <NavTabFilter />
            </div>
          </Selections>
        </NewStyleSelection>
      </div>
    </Helmet>
  );
};

export default Standard;

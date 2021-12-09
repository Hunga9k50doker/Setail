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
    transform: translateY(-150px);
    padding-left: 30px;
    padding-right: 30px;
    padding-top: 0;
    box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.1), -2px 2px 4px rgba(0, 0, 0, 0.1);
  }
`;
// const NewStyleItem = styled.div`
//   .selections__item {
//     border-radius: 50%;
//     width: 350px;
//     height: 350px;
//     margin: 30px;
//     &:before {
//       display: block;
//     }
//   }
//   h3 {
//     position: absolute;
//     top: 50%;
//     left: 50%;
//     transform: translate(-50%, 0);
//     font-size: 3rem;
//     z-index: 4;
//     font-family: "Pacifico", sans-serif;
//     font-weight: 400;
//     font-style: italic;
//   }
//   h5,
//   p,
//   i,
//   .selections__rating {
//     display: none;
//   }
// `;
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

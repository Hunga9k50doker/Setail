import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import cardData from "../../../assets/fake-data/CardDetails";
import CardDetails from "../../../components/cards/cardDetails/cardDetails";
import { Baner1, banData } from "../../../components/blogItem/BlogItem";
import Helmet from "../../../components/Helmet/Helmet";
import SlideCardTravel from "../../../components/Carousel/CarouselCardTravel";
import { to_slug } from "../../../utils/utils";
import CustomTitle from "../../../components/customTitle/customTitle";
import "../../App.scss";

const TypographySectionTitle = () => {
  const NewStyle = styled.div`
    .container {
      margin: 0 !important;
    }
    .customTitle {
      background: unset;
      top: 0;
    }
    h2 {
      font-size: 2.4rem;
    }
  `;
  return (
    <Helmet title="Section Title">
      <div className=" grid component">
        <Baner1 banData={{ ...banData[3], title: "Section Title" }} />

        <div className="container-fluid">
          <CustomTitle
            title="Amazing City"
            subTitle="Dolore ipsum eos ipsum aliquyam takimata takimata aliquyam voluptua vero justo. Lorem dolore sanctus sanctus sit elitr dolor vero accusam."
            content="From Heart"
          />
        </div>

        <NewStyle>
          <div className="row grey">
            <div className="col col-xxl-6 col-xl-6 col-md-6 col-sm-12 ">
              <CustomTitle
                title="Great Experts"
                subTitle="Dolore ipsum eos ipsum aliquyam takimata takimata aliquyam voluptua vero justo. Lorem dolore sanctus sanctus sit elitr dolor vero accusam."
              />
            </div>
            <div className="col col-xxl-6 col-xl-6 col-md-6 col-sm-12">
              <CustomTitle
                title="Destination"
                subTitle="Dolore ipsum eos ipsum aliquyam takimata takimata aliquyam voluptua vero justo. Lorem dolore sanctus sanctus sit elitr dolor vero accusam."
              />
            </div>
          </div>
        </NewStyle>
      </div>
    </Helmet>
  );
};

export default TypographySectionTitle;

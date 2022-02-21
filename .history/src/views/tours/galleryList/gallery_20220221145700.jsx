import React from "react";
import styled from "styled-components";
import "../../App.scss";

// import components
import Helmet from "../../../components/Helmet/Helmet";
import Standard from "../standardList/standard";

const NewStyle = styled.div`
  .card {
    position: relative;
    min-height: auto;
    .card-img-top {
      height: 100%;
    }
    .card-information,
    .card-text,
    .card-rating {
      display: none;
    }
    .card-header {
      border: 0;
    }
    .card__header__text {
      display: inline-block;
    }
    .card-body {
      position: absolute;
      width: 100%;
      bottom: 10px;
      left: 0;
    }
    .card-title,
    .card-cost {
      position: absolute;
      width: 100%;
      color: #fff;
    }
  }
`;

const Gallery = () => {
  return (
    <Helmet title="Tours Search Page">
      <div className="component">
        <NewStyle>
          <Standard />
        </NewStyle>
      </div>
    </Helmet>
  );
};

export default Gallery;

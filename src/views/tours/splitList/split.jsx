import React from "react";
import styled from "styled-components";
import "../../App.scss";
// import components
import Helmet from "../../../components/Helmet/Helmet";
import Standard from "../standardList/standard";

const NewStyle = styled.div`
  .card {
    flex-direction: row;
    height: -webkit-fit-content;
    height: -moz-fit-content;
    min-height: 200px;
    .card-img-top {
      height: -webkit-fit-content;
      height: -moz-fit-content;
      height: fit-content;
      img {
        width: 100%;
        height: 100%;
      }
    }
    .card-information {
      top: unset;
      left: 20px;
      bottom: 20px;
      height: 50px;
      background: #fff;
      justify-content: flex-start;
      p {
        background: #3fd0d4;
        padding: 10px 15px;
        margin: 10px;
      }
    }
    &-title,
    &-text,
    &-cost__rating {
      position: absolute;
      top: 0;
      left: 40px;
      width: 100%;
    }
    &-text {
      top: 50px;
      max-height: 80px;
      max-width: 90%;
      display: -webkit-box;
      -webkit-box-oriant: vertical;
      -webkit-line-clamp: 3;
      overflow: hidden;
      text-overflow: ellipsis;
    }
    &-cost__rating {
      top: 140px;

      font-size: 1rem;
      justify-content: flex-start;
      .card-cost {
        margin-right: 10px;
      }
    }
  }
`;

const Split = () => {
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

export default Split;

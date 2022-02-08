import React from "react";
import styled from "styled-components";
import "../../App.scss";
// import components
import Helmet from "../../../components/Helmet/Helmet";
import Standard from "../standardList/standard";

import "./split.scss";
const NewStyle = styled.div``;

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

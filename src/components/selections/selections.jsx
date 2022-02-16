import React from "react";
import "./selections.scss";

const Selections = ({ children }) => {
  return (
    <div style={{ paddingTop: "80px" }} className="selections container">
      <div className="grid">
        <div className="row ">{children}</div>
      </div>
    </div>
  );
};

export default Selections;

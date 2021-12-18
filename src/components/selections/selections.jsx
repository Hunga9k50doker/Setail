import React from "react";
import "./selections.scss";

const Selections = ({ children }) => {
  return (
    <div
      style={{ marginTop: "80px", paddingTop: "100px" }}
      className="selections container"
    >
      <div className="grid">
        <div className="row ">{children}</div>
      </div>
    </div>
  );
};

export default Selections;

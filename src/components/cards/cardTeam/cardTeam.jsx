import React from "react";
import "./cardTeam.scss";

const TeamHolderItem = ({ data }) => {
  return (
    <div className="team-holder-item">
      <img src={data.img} alt={data.name} />
      <div className="popup-card">
        <h5>{data.name}</h5>
        <p
          className="popup-card-text"
        
        >
          {data.content}
        </p>
        <div className="social-network">
          <a href="https://twitter.com/home">
            <i className="fab fa-twitter"></i>
          </a>
          <a href="https://www.pinterest.com/">
            <i className="fab fa-pinterest-p"></i>
          </a>
          <a href="https://www.facebook.com/">
            <i className="fab fa-facebook-f"></i>
          </a>
          <a href="https://www.instagram.com/">
            <i className="fab fa-instagram"></i>
          </a>
        </div>
      </div>
    </div>
  );
};
const TeamHolderBelow = ({ data }) => {
  return (
    <div className="team-holder-item__bellow">
      <img src={data.img} alt={data.name} />
      <div className="info">
        <h5>{data.name}</h5>
        <p>{data.position}</p>
      </div>
    </div>
  );
};
export { TeamHolderItem, TeamHolderBelow };

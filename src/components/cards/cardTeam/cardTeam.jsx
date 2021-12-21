import React from "react";
import "./cardTeam.scss";
import {
  ourTeam10,
  ourTeam11,
  ourTeam12,
  ourTeam4,
  ourTeam5,
  ourTeam6,
  ourTeam7,
  ourTeam8,
  ourTeam9,
} from "../../../assets/img";

const teamData = [
  {
    name: "Teresa James",
    content: "Tod at qorspicietic onda emnis iste natus error sit",
    img: ourTeam5,
  },
  {
    name: "Jane Willis",
    content: "Sed ut perspiciatis unde omnis iste natus error sit",
    img: ourTeam6,
    position: "Manager",
  },
  {
    name: "Ralph Fields",
    content: "Ced ai repspiciatis snde omnis iste natus error cit",
    img: ourTeam7,
  },
  {
    name: "Lori Harvey",
    content: "Ued oi perspiciatis ande omnis iste natus atror sit",
    img: ourTeam8,
  },
  {
    name: "Teresa James",
    img: ourTeam10,
    position: "CEO",
  },
  {
    name: "Lori Harvey",
    img: ourTeam11,
    position: "Travel Guide",
  },
  {
    name: "Ralph Fields",
    img: ourTeam12,
    position: "Translator",
  },
];
const TeamHolderItem = ({ data }) => {
  return (
    <div className="team-holder-item">
      <img src={data.img} alt={data.name} />
      <div className="popup-card">
        <h5>{data.name}</h5>
        <p>{data.content}</p>
        <div className="social-network">
          <a href="https://twitter.com/home">
            <i class="fab fa-twitter"></i>
          </a>
          <a href="https://www.pinterest.com/">
            <i class="fab fa-pinterest-p"></i>
          </a>
          <a href="https://www.facebook.com/">
            <i class="fab fa-facebook-f"></i>
          </a>
          <a href="https://www.instagram.com/">
            <i class="fab fa-instagram"></i>
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
export { TeamHolderItem, teamData, TeamHolderBelow };

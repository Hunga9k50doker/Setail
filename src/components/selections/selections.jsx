import React from "react";
import { Link } from "react-router-dom";
// import PropTypes from 'prop-types'

import "./selections.scss";

import {
  Spain,
  Tarragona,
  Marid,
  Bacelona,
  Kosigan,
  Taipe,
  Tainan,
  Taiwan,
  Bali,
  Ubud,
  Siminyak,
  Denpasar,
} from "../../assets/img";
const imgArray = [
  {
    title: "Spain",
    img: Spain,
    subTitle: "",
    cost: "1705$",
    rating: "5.0 Good",
  },
  {
    title: "Tarragona",
    img: Tarragona,
    subTitle: "",
    cost: "1705$",
    rating: "5.0 Good",
  },
  {
    title: "Marid",
    img: Marid,
    subTitle: "",
    cost: "1705$",
    rating: "5.0 Good",
  },
  {
    title: "Bacelona",
    img: Bacelona,
    subTitle: "",
    cost: "1705$",
    rating: "5.0 Good",
  },
  {
    title: "Kosigan",
    img: Kosigan,
    subTitle: "",
    cost: "1705$",
    rating: "5.0 Good",
  },
  {
    title: "Taipe",
    img: Taipe,
    subTitle: "",
    cost: "1705$",
    rating: "5.0 Good",
  },
  {
    title: "Tainan",
    img: Tainan,
    subTitle: "",
    cost: "1705$",
    rating: "5.0 Good",
  },
  {
    title: "Taiwan",
    img: Taiwan,
    subTitle: "",
    cost: "1705$",
    rating: "5.0 Good",
  },
  {
    title: "Bali",
    img: Bali,
    subTitle: "",
    cost: "1705$",
    rating: "5.0 Good",
  },
  {
    title: "Ubud",
    img: Ubud,
    subTitle: "",
    cost: "1705$",
    rating: "5.0 Good",
  },
  {
    title: "Siminyak",
    img: Siminyak,
    subTitle: "",
    cost: "1705$",
    rating: "5.0 Good",
  },
  {
    title: "Denpasar",
    img: Denpasar,
    subTitle: "",
    cost: "1705$",
    rating: "5.0 Good",
  },
];
const Selections = (props) => {
  return (
    <div className="selections container">
      <div className="grid">
        <div className="row ">
          {imgArray.map((item, index) => (
            <div
              key={index}
              className="col col-xxl-3 col-lg-3 col-md-6 col-sm-12"
            >
              <Link to="" className="selections__item">
                <img src={item.img} alt="not found" />
                <h3>{item.title}</h3>
                <h5>
                  <div className="selections__item-rating">
                    <i class="fas fa-star-half-alt"></i>
                    <p>{item.rating}</p>
                  </div>
                  <p>{item.cost}</p>
                </h5>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Selections;

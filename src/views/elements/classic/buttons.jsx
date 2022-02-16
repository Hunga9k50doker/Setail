import React, { useState } from "react";
import { Baner1, banData } from "../../../components/blogItem/BlogItem";

import "../../App.scss";
import "./styles.scss";
const data = [
  {
    title: "Solid",
    content:
      "Et kasd lorem justo voluptua stet dolor eos labore eos. Lorem elitr aliquyam dolor nonumy ipsum lorem erat. Ea dolore tempor ea est magna.",
  },
  {
    title: "With Icon",
    content:
      "Et kasd lorem justo voluptua stet dolor eos labore eos. Lorem elitr aliquyam dolor nonumy ipsum lorem erat. Ea dolore tempor ea est magna.",
  },
  {
    title: "Simple",
    content:
      "Et kasd lorem justo voluptua stet dolor eos labore eos. Lorem elitr aliquyam dolor nonumy ipsum lorem erat. Ea dolore tempor ea est magna.",
    styles: {
      width: "fit-content",
      padding: "14px 0",
      background: "unset",
    },
  },
  {
    title: "Small",
    content:
      "Et kasd lorem justo voluptua stet dolor eos labore eos. Lorem elitr aliquyam dolor nonumy ipsum lorem erat. Ea dolore tempor ea est magna.",
    styles: {
      padding: "10px 42px",
      width: "218px",
    },
  },
  {
    title: "Medium",
    content:
      "Et kasd lorem justo voluptua stet dolor eos labore eos. Lorem elitr aliquyam dolor nonumy ipsum lorem erat. Ea dolore tempor ea est magna.",
  },
  {
    title: "Large",
    content:
      "Et kasd lorem justo voluptua stet dolor eos labore eos. Lorem elitr aliquyam dolor nonumy ipsum lorem erat. Ea dolore tempor ea est magna.",
    styles: {
      padding: "18px 66px",
    },
  },
];

export const Button = (props) => {
  // const [hover, setHover] = useState(false);
  return (
    <button
      style={props.styles}
      className={`btn__primary btn ${props.title === "Simple" ? "active" : ""}`}
    >
      <span>View More</span>
      <i
        className={`fas fa-chevron-right ${
          props.title === "With Icon" ? "" : "hidden"
        } `}
      ></i>
    </button>
  );
};

const Buttons = () => {
  return (
    <div className="component">
      <Baner1 banData={{ ...banData[2], title: "Buttons" }} />
      <div className="container pb-2">
        <div className="row p-5">
          {data.slice(0, 3).map((e, id) => (
            <div key={id} className="col col-xxl-4 col-xl-4 col-md-6 col-sm-12">
              <div className="card__detail">
                <h2 className="card__detail__title">{e.title}</h2>
                <p className="card__detail__desc">{e.content}</p>
                <Button styles={e.styles} title={e.title} />
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="container-fluid grey ">
        <div className="container__grey mb-4">
          <div className="row p-5">
            {data.slice(3, 6).map((e, id) => (
              <div
                key={id}
                className="col col-xxl-4 col-xl-4 col-md-6 col-sm-12"
              >
                <div className="card__detail">
                  <h2 className="card__detail__title">{e.title}</h2>
                  <p className="card__detail__desc">{e.content}</p>
                  <Button styles={e.styles} title={e.title} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Buttons;

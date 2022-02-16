import React, { useState } from "react";
import { Baner1, banData } from "../../../components/blogItem/BlogItem";

import "../../App.scss";
import "./styles.scss";
const data = [
  {
    title: "Traveling",
    content:
      "Et kasd lorem justo voluptua stet dolor eos labore eos. Lorem elitr aliquyam dolor nonumy ipsum lorem erat. Ea dolore tempor ea est magna, invidunt dolor labore lorem kasd amet tempor, amet duo amet no aliquyam. Nonumy sea ea sed.",
  },
  {
    title: "Arrival",
    content:
      "Et kasd lorem justo voluptua stet dolor eos labore eos. Lorem elitr aliquyam dolor nonumy ipsum lorem erat. Ea dolore tempor ea est magna, invidunt dolor labore lorem kasd amet tempor, amet duo amet no aliquyam. Nonumy sea ea sed.",
  },
  {
    title: "Room types",
    content:
      "Et kasd lorem justo voluptua stet dolor eos labore eos. Lorem elitr aliquyam dolor nonumy ipsum lorem erat. Ea dolore tempor ea est magna, invidunt dolor labore lorem kasd amet tempor, amet duo amet no aliquyam. Nonumy sea ea sed.",
  },
  {
    title: "Transport",
    content:
      "Et kasd lorem justo voluptua stet dolor eos labore eos. Lorem elitr aliquyam dolor nonumy ipsum lorem erat. Ea dolore tempor ea est magna, invidunt dolor labore lorem kasd amet tempor, amet duo amet no aliquyam. Nonumy sea ea sed.",
  },
  {
    title: "Insurance",
    content:
      "Et kasd lorem justo voluptua stet dolor eos labore eos. Lorem elitr aliquyam dolor nonumy ipsum lorem erat. Ea dolore tempor ea est magna, invidunt dolor labore lorem kasd amet tempor, amet duo amet no aliquyam. Nonumy sea ea sed.",
  },
  {
    title: "Camping",
    content:
      "Et kasd lorem justo voluptua stet dolor eos labore eos. Lorem elitr aliquyam dolor nonumy ipsum lorem erat. Ea dolore tempor ea est magna, invidunt dolor labore lorem kasd amet tempor, amet duo amet no aliquyam. Nonumy sea ea sed.",
  },
];
const Accordions = ({ title, content }) => {
  const [isActive, setIsActive] = useState(false);

  return (
    <div className="anccordion ">
      <section className="grey" onClick={() => setIsActive(!isActive)}>
        <div className="anccordion__icon ">{isActive ? "+" : "-"}</div>
        <h3 className="anccordion__title">{title}</h3>
      </section>
      <div
        className={`anccordion__content__wrapper ${isActive ? "active" : ""}`}
      >
        <p className="anccordion__content">{content}</p>
      </div>
    </div>
  );
};

const ElementAccordions = () => {
  return (
    <div className="component">
      <Baner1 banData={{ ...banData[2], title: "Accordions" }} />

      <div className="container pb-2">
        {data.slice(0, 3).map((e, id) => (
          <Accordions key={id} title={e.title} content={e.content} />
        ))}
      </div>
      <div className="container grey container__grey">
        {data.slice(3, 6).map((e, id) => (
          <Accordions key={id} title={e.title} content={e.content} />
        ))}
      </div>
    </div>
  );
};

export default ElementAccordions;
